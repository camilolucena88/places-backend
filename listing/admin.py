from django.contrib import admin
from wagtail.contrib.modeladmin.options import ModelAdmin, modeladmin_register

from listing.models import Business, Sector


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


modeladmin_register(BusinessAdmin)
modeladmin_register(SectorAdmin)
