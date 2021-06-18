from django.db import models
from django.contrib.auth.models import User

from django.utils.translation import gettext_lazy as _


class UserHelper(User):
    PARENT = 0
    STUDENT = 1
    INSTRUCTOR = 2
    ADMIN = 3

    class Meta:
        proxy = True

    @property
    def is_student(self):
        return Listing.objects.filter(user=self).exists()

    @property
    def is_admin(self):
        return self.has_perm('auth.add_user')


class ActivityType(models.Model):
    title = models.CharField("Titulo", max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Tipos de Actividades"
        verbose_name = "Un Tipo de Actividades"

    def __str__(self):
        return self.title


class Sector(models.Model):
    name = models.CharField("BusinessName", max_length=50)
    created_at = models.DateTimeField("Created at", auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Business(models.Model):
    BUSINESS_TYPE = (
        (0, _('Registered Single Business')),
        (0, _('Registered Multiple Business')),
        (1, _('Self-Employed')),
        (2, _('Individual - Taxes on personal income')),
        (3, _('Non-profit Organization')),
        (4, _('Government Organization')),
        (5, _('Private Organization')),
        (5, _('Public Organization')),
    )
    ACCOUNT_TYPE = (
        (0, _('Business with Listings')),
        (1, _('Service Provider')),
        (2, _('Influencer')),
    )
    name = models.CharField("BusinessName", max_length=50)
    vat = models.CharField("VAT", max_length=20, blank=True, null=True)
    business_email = models.EmailField(max_length=254)
    telephone = models.CharField("Telephone", max_length=20)
    address = models.TextField('Direction', blank=True, null=True)
    city = models.TextField('City', blank=True, null=True)
    country = models.TextField('Country', blank=True, null=True)
    business_type = models.SmallIntegerField('Business Type', choices=BUSINESS_TYPE)
    sector = models.ForeignKey(Sector, on_delete=models.CASCADE, related_name='business_sector')
    account_type = models.SmallIntegerField('Account Type', choices=ACCOUNT_TYPE)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField("Created at", auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Listing(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,
                                primary_key=True,
                                related_name='student_profile',
                                help_text="Usuario")
    dob = models.DateField("Fecha de Nacimiento", blank=True, null=True)
    telephone = models.CharField("Teléfono", blank=True, null=True, max_length=20)
    address = models.TextField('Dirección', blank=True, null=True)
    city = models.TextField('Ciudad', blank=True, null=True)
    country = models.TextField('País', blank=True, null=True)
    account_status = models.SmallIntegerField('Estatus', null=True, blank=True, default=0)
    created_at = models.DateTimeField("Dia de creacion", auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.user)

    def get_absolute_url(self):
        return f"/student/{self.user.id}/admin/view"

    def get_user(self):
        return self.user.value_from_object()

    def email(self):
        return User.objects.get(username=self.user).email

    def first_name(self):
        return User.objects.get(username=self.user).first_name

    def last_name(self):
        return User.objects.get(username=self.user).last_name

    class Meta:
        db_table = "courses_students"
        verbose_name_plural = "Estudiantes"
        verbose_name = "Estudiante"


class ListingAdmin(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, related_name='student_parent_profile',
                                help_text="Usuario")
    listings = models.ManyToManyField(Listing, help_text="Lugares")
    dob = models.DateField("Fecha de Nacimiento", blank=True, null=True)
    telephone = models.CharField('Telefono', blank=True, null=True, max_length=20)
    address = models.TextField('Dirección', blank=True, null=True)
    city = models.TextField('Ciudad', blank=True, null=True)
    country = models.TextField('País', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Representantes"
        verbose_name = "Representante"

    def __str__(self):
        return str(self.user)

    @property
    def first_name(self):
        return User.objects.get(username=self.user).first_name

    @property
    def last_name(self):
        return User.objects.get(username=self.user).last_name

    def children(self, select=None):
        if select is None:
            return list(self.listings.all())
        return list(self.listings.all().values_list(select, flat=True))


class Attachments(models.Model):
    title = models.CharField("Título", max_length=50)
    description = models.TextField("Descripción", blank=True, null=True)
    file = models.FileField("Archivo", upload_to="files/notifications")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def filename(self):
        return self.file.name.rsplit('/', 2)[2]
