from django.db import models
from django.contrib.auth.models import User

from django.utils.translation import gettext_lazy as _

from places.models import Places


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


COUNTRIES = [
    ("AF", _("Afghanistan")),
    ("AX", _("Åland Islands")),
    ("AL", _("Albania")),
    ("DZ", _("Algeria")),
    ("AS", _("American Samoa")),
    ("AD", _("Andorra")),
    ("AO", _("Angola")),
    ("AI", _("Anguilla")),
    ("AQ", _("Antarctica")),
    ("AG", _("Antigua and Barbuda")),
    ("AR", _("Argentina")),
    ("AM", _("Armenia")),
    ("AW", _("Aruba")),
    ("AU", _("Australia")),
    ("AT", _("Austria")),
    ("AZ", _("Azerbaijan")),
    ("BS", _("Bahamas")),
    ("BH", _("Bahrain")),
    ("BD", _("Bangladesh")),
    ("BB", _("Barbados")),
    ("BY", _("Belarus")),
    ("BE", _("Belgium")),
    ("BZ", _("Belize")),
    ("BJ", _("Benin")),
    ("BM", _("Bermuda")),
    ("BT", _("Bhutan")),
    ("BO", _("Bolivia")),
    ("BQ", _("Bonaire")),
    ("BA", _("Bosnia and Herzegovina")),
    ("BW", _("Botswana")),
    ("BV", _("Bouvet Island")),
    ("BR", _("Brazil")),
    ("IO", _("British Indian Ocean Territory")),
    ("BN", _("Brunei Darussalam")),
    ("BG", _("Bulgaria")),
    ("BF", _("Burkina Faso")),
    ("BI", _("Burundi")),
    ("KH", _("Cambodia")),
    ("CM", _("Cameroon")),
    ("CA", _("Canada")),
    ("CV", _("Cape Verde")),
    ("KY", _("Cayman Islands")),
    ("CF", _("Central African Republic")),
    ("TD", _("Chad")),
    ("CL", _("Chile")),
    ("CN", _("China")),
    ("CX", _("Christmas Island")),
    ("CC", _("Cocos (Keeling) Islands")),
    ("CO", _("Colombia")),
    ("KM", _("Comoros")),
    ("CG", _("Congo")),
    ("CD", _("Congo, the Democratic Republic of the")),
    ("CK", _("Cook Islands")),
    ("CR", _("Costa Rica")),
    ("CI", _("Côte d'Ivoire")),
    ("HR", _("Croatia")),
    ("CU", _("Cuba")),
    ("CW", _("Curaçao")),
    ("CY", _("Cyprus")),
    ("CZ", _("Czech Republic")),
    ("DK", _("Denmark")),
    ("DJ", _("Djibouti")),
    ("DM", _("Dominica")),
    ("DO", _("Dominican Republic")),
    ("EC", _("Ecuador")),
    ("EG", _("Egypt")),
    ("SV", _("El Salvador")),
    ("GQ", _("Equatorial Guinea")),
    ("ER", _("Eritrea")),
    ("EE", _("Estonia")),
    ("ET", _("Ethiopia")),
    ("FK", _("Falkland Islands (Malvinas)")),
    ("FO", _("Faroe Islands")),
    ("FJ", _("Fiji")),
    ("FI", _("Finland")),
    ("FR", _("France")),
    ("GF", _("French Guiana")),
    ("PF", _("French Polynesia")),
    ("TF", _("French Southern Territories")),
    ("GA", _("Gabon")),
    ("GM", _("Gambia")),
    ("GE", _("Georgia")),
    ("DE", _("Germany")),
    ("GH", _("Ghana")),
    ("GI", _("Gibraltar")),
    ("GR", _("Greece")),
    ("GL", _("Greenland")),
    ("GD", _("Grenada")),
    ("GP", _("Guadeloupe")),
    ("GU", _("Guam")),
    ("GT", _("Guatemala")),
    ("GG", _("Guernsey")),
    ("GN", _("Guinea")),
    ("GW", _("Guinea-Bissau")),
    ("GY", _("Guyana")),
    ("HT", _("Haiti")),
    ("HM", _("Heard Island and McDonald Islands")),
    ("VA", _("Holy See (Vatican City State)")),
    ("HN", _("Honduras")),
    ("HK", _("Hong Kong")),
    ("HU", _("Hungary")),
    ("IS", _("Iceland")),
    ("IN", _("India")),
    ("ID", _("Indonesia")),
    ("IR", _("Iran, Islamic Republic of")),
    ("IQ", _("Iraq")),
    ("IE", _("Ireland")),
    ("IM", _("Isle of Man")),
    ("IL", _("Israel")),
    ("IT", _("Italy")),
    ("JM", _("Jamaica")),
    ("JP", _("Japan")),
    ("JE", _("Jersey")),
    ("JO", _("Jordan")),
    ("KZ", _("Kazakhstan")),
    ("KE", _("Kenya")),
    ("KI", _("Kiribati")),
    ("KP", _("Korea, Democratic People's Republic of")),
    ("KR", _("Korea, Republic of")),
    ("KW", _("Kuwait")),
    ("KG", _("Kyrgyzstan")),
    ("LA", _("Lao People's Democratic Republic")),
    ("LV", _("Latvia")),
    ("LB", _("Lebanon")),
    ("LS", _("Lesotho")),
    ("LR", _("Liberia")),
    ("LY", _("Libya")),
    ("LI", _("Liechtenstein")),
    ("LT", _("Lithuania")),
    ("LU", _("Luxembourg")),
    ("MO", _("Macao")),
    ("MK", _("Macedonia, the former Yugoslav Republic of")),
    ("MG", _("Madagascar")),
    ("MW", _("Malawi")),
    ("MY", _("Malaysia")),
    ("MV", _("Maldives")),
    ("ML", _("Mali")),
    ("MT", _("Malta")),
    ("MH", _("Marshall Islands")),
    ("MQ", _("Martinique")),
    ("MR", _("Mauritania")),
    ("MU", _("Mauritius")),
    ("YT", _("Mayotte")),
    ("MX", _("Mexico")),
    ("FM", _("Micronesia, Federated States of")),
    ("MD", _("Moldova, Republic of")),
    ("MC", _("Monaco")),
    ("MN", _("Mongolia")),
    ("ME", _("Montenegro")),
    ("MS", _("Montserrat")),
    ("MA", _("Morocco")),
    ("MZ", _("Mozambique")),
    ("MM", _("Myanmar")),
    ("NA", _("Namibia")),
    ("NR", _("Nauru")),
    ("NP", _("Nepal")),
    ("NL", _("Netherlands")),
    ("NC", _("New Caledonia")),
    ("NZ", _("New Zealand")),
    ("NI", _("Nicaragua")),
    ("NE", _("Niger")),
    ("NG", _("Nigeria")),
    ("NU", _("Niue")),
    ("NF", _("Norfolk Island")),
    ("MP", _("Northern Mariana Islands")),
    ("NO", _("Norway")),
    ("OM", _("Oman")),
    ("PK", _("Pakistan")),
    ("PW", _("Palau")),
    ("PS", _("Palestinian Territory, Occupied")),
    ("PA", _("Panama")),
    ("PG", _("Papua New Guinea")),
    ("PY", _("Paraguay")),
    ("PE", _("Peru")),
    ("PH", _("Philippines")),
    ("PN", _("Pitcairn")),
    ("PL", _("Poland")),
    ("PT", _("Portugal")),
    ("PR", _("Puerto Rico")),
    ("QA", _("Qatar")),
    ("RE", _("Réunion")),
    ("RO", _("Romania")),
    ("RU", _("Russian Federation")),
    ("RW", _("Rwanda")),
    ("BL", _("Saint Barthélemy")),
    ("SH", _("Saint Helena, Ascension and Tristan")),
    ("KN", _("Saint Kitts and Nevis")),
    ("LC", _("Saint Lucia")),
    ("MF", _("Saint Martin (French part)")),
    ("PM", _("Saint Pierre and Miquelon")),
    ("VC", _("Saint Vincent and the Grenadines")),
    ("WS", _("Samoa")),
    ("SM", _("San Marino")),
    ("ST", _("Sao Tome and Principe")),
    ("SA", _("Saudi Arabia")),
    ("SN", _("Senegal")),
    ("RS", _("Serbia")),
    ("SC", _("Seychelles")),
    ("SL", _("Sierra Leone")),
    ("SG", _("Singapore")),
    ("SX", _("Sint Maarten (Dutch part)")),
    ("SK", _("Slovakia")),
    ("SI", _("Slovenia")),
    ("SB", _("Solomon Islands")),
    ("SO", _("Somalia")),
    ("ZA", _("South Africa")),
    ("GS", _("South Georgia and the South Sandwich Islands")),
    ("SS", _("South Sudan")),
    ("ES", _("Spain")),
    ("LK", _("Sri Lanka")),
    ("SD", _("Sudan")),
    ("SR", _("Suriname")),
    ("SJ", _("Svalbard and Jan Mayen")),
    ("SZ", _("Swaziland")),
    ("SE", _("Sweden")),
    ("CH", _("Switzerland")),
    ("SY", _("Syrian Arab Republic")),
    ("TW", _("Taiwan, Province of China")),
    ("TJ", _("Tajikistan")),
    ("TZ", _("Tanzania, United Republic of")),
    ("TH", _("Thailand")),
    ("TL", _("Timor-Leste")),
    ("TG", _("Togo")),
    ("TK", _("Tokelau")),
    ("TO", _("Tonga")),
    ("TT", _("Trinidad and Tobago")),
    ("TN", _("Tunisia")),
    ("TR", _("Turkey")),
    ("TM", _("Turkmenistan")),
    ("TC", _("Turks and Caicos Islands")),
    ("TV", _("Tuvalu")),
    ("UG", _("Uganda")),
    ("UA", _("Ukraine")),
    ("AE", _("United Arab Emirates")),
    ("GB", _("United Kingdom")),
    ("US", _("United States")),
    ("UM", _("United States Minor Outlying Islands")),
    ("UY", _("Uruguay")),
    ("UZ", _("Uzbekistan")),
    ("VU", _("Vanuatu")),
    ("VE", _("Venezuela")),
    ("VN", _("Vietnam")),
    ("VG", _("Virgin Islands, British")),
    ("VI", _("Virgin Islands, U.S.")),
    ("WF", _("Wallis and Futuna")),
    ("EH", _("Western Sahara")),
    ("YE", _("Yemen")),
    ("ZM", _("Zambia")),
    ("ZW", _("Zimbabwe"))
]


class Listing(models.Model):
    places = models.ForeignKey(Places, on_delete=models.CASCADE, related_name='place_listing')
    telephone = models.CharField("Telephone", blank=True, null=True, max_length=20)
    address = models.TextField('Direction', blank=True, null=True)
    city = models.TextField('City', blank=True, null=True)
    country = models.TextField('Country', blank=True, null=True, choices=COUNTRIES)
    account_status = models.SmallIntegerField('Status', null=True, blank=True, default=0)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owner_listing', help_text="Owner")
    created_at = models.DateTimeField("Created At", auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.places)

    class Meta:
        verbose_name_plural = "Listings"
        verbose_name = "Listing"

    @property
    def name(self):
        return self.places.name

    @property
    def description(self):
        return self.places.description

    @property
    def slug(self):
        return self.places.slug

    @property
    def genres(self):
        return self.places.genres

    @property
    def img(self):
        return self.places.img_render

    @property
    def comments(self):
        return self.places.comments

    @property
    def likes(self):
        return self.places.likes

    @property
    def monday_hours(self):
        try:
            return OpeningHours.objects.get(listing=self, weekday=1)
        except OpeningHours.DoesNotExist:
            return OpeningHours.objects.create(listing=self, from_hour='00:00:00', to_hour='00:00:00', weekday=1)

    @property
    def tuesday_hours(self):
        try:
            return OpeningHours.objects.get(listing=self, weekday=2)
        except OpeningHours.DoesNotExist:
            return OpeningHours.objects.create(listing=self, from_hour='00:00:00', to_hour='00:00:00', weekday=2)

    @property
    def wednesday_hours(self):
        try:
            return OpeningHours.objects.get(listing=self, weekday=3)
        except OpeningHours.DoesNotExist:
            return OpeningHours.objects.create(listing=self, from_hour='00:00:00', to_hour='00:00:00', weekday=3)

    @property
    def thursday_hours(self):
        try:
            return OpeningHours.objects.get(listing=self, weekday=4)
        except OpeningHours.DoesNotExist:
            return OpeningHours.objects.create(listing=self, from_hour='00:00:00', to_hour='00:00:00', weekday=4)

    @property
    def friday_hours(self):
        try:
            return OpeningHours.objects.get(listing=self, weekday=5)
        except OpeningHours.DoesNotExist:
            return OpeningHours.objects.create(listing=self, from_hour='00:00:00', to_hour='00:00:00', weekday=5)

    @property
    def saturday_hours(self):
        try:
            return OpeningHours.objects.get(listing=self, weekday=6)
        except OpeningHours.DoesNotExist:
            return OpeningHours.objects.create(listing=self, from_hour='00:00:00', to_hour='00:00:00', weekday=6)

    @property
    def sunday_hours(self):
        try:
            return OpeningHours.objects.get(listing=self, weekday=7)
        except OpeningHours.DoesNotExist:
            return OpeningHours.objects.create(listing=self, from_hour='00:00:00', to_hour='00:00:00', weekday=7)


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


WEEKDAYS = [
    (1, _("Monday")),
    (2, _("Tuesday")),
    (3, _("Wednesday")),
    (4, _("Thursday")),
    (5, _("Friday")),
    (6, _("Saturday")),
    (7, _("Sunday")),
]


class OpeningHours(models.Model):
    """
    Store opening times of company premises,
    defined on a daily basis (per day) using one or more
    start and end times of opening slots.
    """

    class Meta:
        verbose_name = _('Opening Hours')  # plurale tantum
        verbose_name_plural = _('Opening Hours')
        ordering = ['listing', 'weekday', 'from_hour']
        unique_together = [['listing', 'weekday']]

    listing = models.ForeignKey(Listing, on_delete=models.CASCADE)
    weekday = models.IntegerField(_('Weekday'), choices=WEEKDAYS)
    from_hour = models.TimeField(_('Opening'))
    to_hour = models.TimeField(_('Closing'))
    open_all_day = models.BooleanField(default=False)
    closed = models.BooleanField(default=False)

    def __str__(self):
        return _("%(weekday)s (%(from_hour)s - %(to_hour)s)") % {
            'weekday': self.weekday,
            'from_hour': self.from_hour,
            'to_hour': self.to_hour
        }
