from datetime import timedelta, datetime, date

from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from django.shortcuts import render, redirect

# Create your views here.
from listing.models import Listing
from payments.forms import InvoiceModelForm, CreatePaymentModelForm, InvoiceIndividualModelForm
from payments.models import Payments, PAYMENT_PENDING, PAYMENT_PROOF, PaymentStatus, PAYMENT_APPROVED, PaymentType, \
    PAYMENT_REQUEST, Products, PaymentGroups, PaymentInvoice


def request_verification(request):
    return not request.user.is_authenticated


@login_required(redirect_field_name='login', login_url='/_util/login/')
def view_new_payments(request):
    if request_verification(request):
        return redirect('/_util/login')
    else:
        if not request.user.is_authenticated:
            return render(request, "404.html")
        if (request.GET.get('paginate_by')):
            paginate_by = request.GET.get('paginate_by')
        else:
            paginate_by = 5
        payments = Payments.objects.filter(status=PAYMENT_PENDING, type=PAYMENT_PROOF)
        paginator = Paginator(payments, paginate_by)  # Show 25 contacts per page.

        page_number = request.GET.get('page')
        data = {
            "user_type": 'student',
            "page": 'new',
            "payments": payments,
            "page_obj": paginator.get_page(page_number),
            "paginate_by": paginate_by,
            "paginator": paginator
        }
        return render(request, "payments/view.html", data)


@login_required(redirect_field_name='login', login_url='/_util/login/')
def approve_payment(request, payment_id):
    if request.method == 'POST':
        payment = Payments.objects.get(pk=payment_id)
        payment.status = PaymentStatus.objects.get(pk=PAYMENT_APPROVED)
        payment.approved_by = request.user
        payment.save()
        messages.success(request, 'Pago aprobado satisfactoriamente.')
        return redirect("/payments/view")


@login_required(redirect_field_name='login', login_url='/_util/login/')
def view_payments(request):
    if request_verification(request):
        return redirect('/_util/login')
    else:
        if not request.user.is_authenticated:
            return render(request, "404.html")
        if (request.GET.get('paginate_by')):
            paginate_by = request.GET.get('paginate_by')
        else:
            paginate_by = 5
        payments = Payments.objects.filter(status=PAYMENT_APPROVED, type=PAYMENT_PROOF)
        paginator = Paginator(payments, paginate_by)  # Show 25 contacts per page.

        page_number = request.GET.get('page')
        data = {
            "user_type": 'student',
            "page": 'approved',
            "payments": payments,
            "page_obj": paginator.get_page(page_number),
            "paginate_by": paginate_by,
            "paginator": paginator
        }
        return render(request, "payments/view.html", data)


@login_required(redirect_field_name='login', login_url='/_util/login/')
def view_invoice(request, payment_id):
    payment = Payments.objects.get(pk=payment_id)
    data = {
        "payment": payment,
    }
    return render(request, "payments/invoice.html", data)


@login_required(redirect_field_name='login', login_url='/_util/login/')
def create_payment_request(request):
    if request.method == 'POST':
        payment_form = CreatePaymentModelForm(request.POST)
        payment = payment_form.save(commit=False)
        payment.type = PaymentType.objects.get(id=PAYMENT_REQUEST)
        payment.created_by = request.user
        payment.save()
        if payment_form.is_valid():
            payment.product.add(Products.objects.get(title='Mensualidad'))
            payment_form.save()
            if request.POST.get('type') == 'paymentgroups':
                payment_group = PaymentGroups.objects.get(pk=request.POST.get('object_id'))
                invoice = PaymentInvoice(payment=payment, content_object=payment_group)
            elif request.POST.get('type') == 'students':
                listing = Listing.objects.get(pk=request.POST.get('object_id'))
                invoice = PaymentInvoice(payment=payment, content_object=listing)
            else:
                raise ValueError('Error with your form, it is not valid')
            expired_date = request.POST.get('expired_at')
            invoice.expired_at = datetime.strptime(expired_date, '%d/%m/%Y')
            invoice.save()
            messages.success(request, 'Solicitud creada con exito.')
    return render(request, "payments/create.html",
                  {'payments_groups': PaymentGroups.objects.all(), 'payment_form': CreatePaymentModelForm,
                   'invoice_form': InvoiceModelForm, 'invoice_individual_form': InvoiceIndividualModelForm})


@login_required(redirect_field_name='login', login_url='/_util/login/')
def view_requested_payment(request):
    if request_verification(request):
        return redirect('/_util/login')
    else:
        if not request.user.is_authenticated:
            return render(request, "404.html")
        if request.GET.get('paginate_by'):
            paginate_by = request.GET.get('paginate_by')
        else:
            paginate_by = 5
        payments = Payments.objects.filter(type=PAYMENT_REQUEST)
        paginator = Paginator(payments, paginate_by)  # Show 25 contacts per page.

        page_number = request.GET.get('page')
        data = {
            "user_type": 'student',
            "page": 'requested',
            "payments": payments,
            "page_obj": paginator.get_page(page_number),
            "paginate_by": paginate_by,
            "paginator": paginator
        }
        return render(request, "payments/view.html", data)


@login_required(redirect_field_name='login', login_url='/_util/login/')
def main_page(request):
    data = {
        "payments": Payments.objects.all()
    }
    return render(request, "payments/main.html", data)
