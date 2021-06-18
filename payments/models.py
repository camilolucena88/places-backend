from datetime import datetime

from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models
from django.db.models import Q

from listing.models import Listing


class Products(models.Model):
    title = models.CharField("Título", max_length=50)
    description = models.CharField("Descripción", max_length=100)
    amount = models.SmallIntegerField("Monto")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Productos"
        verbose_name = "Producto"

    def __str__(self):
        return self.title


class PaymentStatus(models.Model):
    title = models.CharField("Título", max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Estados de los Pagos"
        verbose_name = "Estado de los Pagos"

    def __str__(self):
        return self.title


class PaymentType(models.Model):
    PAYMENT_REQUEST = 1
    PAYMENT_PROOF = 2
    title = models.CharField("Título", max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Tipos de Pagos"
        verbose_name = "Tipo de Pago"

    def __str__(self):
        return self.title


PAYMENT_REQUEST = 1
PAYMENT_PROOF = 2
PAYMENT_PENDING = 1
PAYMENT_APPROVED = 2
PAYMENT_CANCELLED = 3
PAYMENT_REJECTED = 4


class Payments(models.Model):
    description = models.CharField("Descripción", max_length=100)
    type = models.ForeignKey(PaymentType, on_delete=models.CASCADE,
                             blank=True,
                             null=True,
                             default=PAYMENT_REQUEST,
                             help_text="Tipo de Pago: 1: Solicitado",
                             )
    product = models.ManyToManyField(Products, help_text="Producto")
    amount = models.SmallIntegerField("Monto")
    status = models.ForeignKey(PaymentStatus, on_delete=models.CASCADE, default=PAYMENT_PENDING,
                               help_text="Tipo de Pago: 0:Pendiente, 1:APROBADO, 2:Cancelado, 3:Rechazado")
    parent_transaction = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True,
                                           help_text="Pago relacionado")
    related_student = models.ForeignKey(Listing, on_delete=models.CASCADE, null=True, blank=True,
                                        help_text="Estudiante")
    file = models.FileField("Archivo", upload_to="files/payments", blank=True, null=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, help_text="Creado por")
    approved_by = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE, related_name="administrator")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Pagos"
        verbose_name = "Pago"

    def __str__(self):
        return self.description

    def verify_status(self):
        if self.status.id == PAYMENT_PENDING:
            return "info"
        elif self.status.id == PAYMENT_CANCELLED:
            return "success"
        else:
            return "danger"

    @staticmethod
    def paid_invoices_by_user(user):
        return Payments.objects.filter(
            Q(type=PAYMENT_PROOF) & Q(related_student=user.student_profile) | Q(created_by=user)
        )

    def invoice(self):
        return PaymentInvoice.objects.get(payment=self)

    @property
    def approved_paid_invoices(self):
        return Payments.objects.filter(
            Q(type=PAYMENT_PROOF) & Q(status=PAYMENT_APPROVED)
        )

    @property
    def pending_payment_request(self):
        return Payments.objects.filter(
            Q(type=PAYMENT_PROOF) & Q(status=PAYMENT_PENDING)
        )


class PaymentGroups(models.Model):
    name = models.CharField("Nombre", max_length=50)
    description = models.TextField("Descripción", max_length=300)
    user = models.ManyToManyField(User, help_text="Usuario")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Grupos de Pagos"

    def __str__(self):
        return self.name

    def pending_invoices(self, list_paid_invoices):
        content_type = ContentType.objects.get_for_model(self)
        return PaymentInvoice.pending(content_type=content_type,
                                      list_paid_invoices=list_paid_invoices,
                                      student_id=self.id)

    def expired_invoices(self, list_paid_invoices):
        content_type = ContentType.objects.get_for_model(self)
        return PaymentInvoice.expired(content_type=content_type,
                                      list_paid_invoices=list_paid_invoices,
                                      student_id=self.id)


class PaymentInvoice(models.Model):
    payment = models.ForeignKey(Payments, on_delete=models.CASCADE)
    limit = models.Q(app_label='auth', model='user') | models.Q(app_label='students', model='paymentgroups')
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, limit_choices_to=limit)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')
    expired_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Facturas"

    @property
    def user(self):
        if self.content_type == ContentType.objects.get_for_model(User):
            return User.objects.get(id=self.object_id)
        return self.user_group.user.all()

    @property
    def user_group(self):
        if self.content_type == ContentType.objects.get_for_model(PaymentGroups):
            return PaymentGroups.objects.get(id=self.object_id)
        return None

    def __str__(self):
        return self.payment.description

    @staticmethod
    def pending(content_type, list_paid_invoices, student_id):
        return PaymentInvoice.objects \
            .filter(content_type=content_type, object_id=student_id).exclude(payment__in=list_paid_invoices)

    @staticmethod
    def expired(content_type, list_paid_invoices, student_id):
        return PaymentInvoice.objects.filter(content_type=content_type, object_id=student_id).exclude(
            payment__in=list_paid_invoices).filter(expired_at__lt=datetime.today().strftime('%Y-%m-%d'))
