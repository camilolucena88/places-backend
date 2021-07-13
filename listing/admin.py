from django.contrib import admin
from wagtail.contrib.modeladmin.options import ModelAdmin, modeladmin_register

from listing.models import Business, Sector, Listing, OpeningHours


class BusinessAdmin(ModelAdmin):
    model = Business
    menu_label = "Business"
    menu_icon = "user"
    menu_order = 290
    list_display = ("name", "vat", "email", "telephone", "address", "city", "country")
    list_filter = ["name", "business_type", "city", "sector"]
    search_fields = ["name", "city", "country"]


class SectorAdmin(ModelAdmin):
    model = Sector
    menu_label = "Sector"
    menu_icon = "user"
    menu_order = 290
    list_display = ("name", "created_at")
    list_filter = ["name", "created_at"]
    search_fields = ["name", "created_at"]


class ListingAdmin(ModelAdmin):
    model = Listing
    menu_label = "Listing"
    menu_icon = "user"
    menu_order = 290
    list_display = ("telephone", "city", "country", "created_at")
    list_filter = ["created_at"]
    search_fields = ["city", "created_at"]


class OpeningHoursAdmin(ModelAdmin):
    model = OpeningHours
    menu_label = "OpeningHours"
    menu_icon = "user"
    menu_order = 290
    list_display = ("listing", "weekday", "from_hour", "to_hour", "closed", "open_all_day")
    list_filter = ["listing", "weekday"]
    search_fields = ["listing", "weekday"]


modeladmin_register(BusinessAdmin)
modeladmin_register(SectorAdmin)
modeladmin_register(ListingAdmin)
modeladmin_register(OpeningHoursAdmin)
