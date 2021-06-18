from django import forms
from django.contrib.auth.models import User
from django.forms import NumberInput, Textarea, DateInput, Select, SelectMultiple
from django.db import models

from listing.models import Listing
from payments.models import Payments, PaymentGroups, PaymentInvoice


class CreatePaymentModelForm(forms.ModelForm):
    class Meta:
        model = Payments
        fields = ['description', 'amount']
        widgets = {
            'description': Textarea(attrs={'class': 'form-control', 'col': 5, 'rows': 5}),
            'amount': NumberInput(attrs={'class': 'form-control', 'placeholder': '0.00'}),
        }


class PaymentGroupsChoices(models.IntegerChoices):
    PRIMARY_SCHOOL_GROUP = 0, 'Primaria'


def payment_groups_choices():
    try:
        if PaymentGroups.DoesNotExist:
            return PaymentGroupsChoices.choices
        return [(choice.pk, choice) for choice in PaymentGroups.objects.all()]
    except PaymentGroups.DoesNotExist:
        return PaymentGroupsChoices.choices


class InvoiceModelForm(forms.ModelForm):
    class Meta:
        model = PaymentInvoice
        fields = ['expired_at', 'object_id']
        widgets = {
            'object_id': Select(attrs={'class': 'selectpicker', 'data-live-search': "true"},
                                choices=payment_groups_choices()),
            'expired_at': DateInput(
                attrs={'class': 'form-control', 'placeholder': 'Select date', 'id': 'kt_datepicker_4_2'})
        }


def listings_choices():
    try:
        if Listing.DoesNotExist:
            return PaymentGroupsChoices.choices
        return [(choice['user'], User.objects.get(pk=choice['user']).get_full_name()) for choice in
                Listing.objects.all().values('user')]
    except Listing.DoesNotExist:
        return PaymentGroupsChoices.choices


class InvoiceIndividualModelForm(forms.ModelForm):
    class Meta:
        model = PaymentInvoice
        fields = ['expired_at', 'object_id']
        widgets = {
            'object_id': SelectMultiple(attrs={'class': 'selectpicker', 'data-live-search': "true"},
                                        choices=listings_choices()),
            'expired_at': DateInput(
                attrs={'class': 'form-control', 'placeholder': 'Select date', 'id': 'kt_datepicker_1'})
        }
