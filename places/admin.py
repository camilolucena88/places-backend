from wagtail.contrib.modeladmin.options import ModelAdmin
from wagtail.contrib.modeladmin.options import modeladmin_register
from django.contrib import admin

from places.models import Places, Images, Genres, Address, Coordinates


class CoordinatesAdmin(admin.ModelAdmin):
    list_display = ["lat", "lon"]
    search_fields = ["lat", "lon"]


class AddressAdmin(admin.ModelAdmin):
    list_display = ["address", "street", "city", "state", "country", "postcode"]
    list_filter = ["city", "state", "country"]
    search_fields = ["address", "city", "country"]


class GenresAdmin(admin.ModelAdmin):
    list_display = ["name", "description", "slug", "created_by"]
    list_filter = ["name", "created_by"]
    search_fields = ["name"]


class ImagesAdmin(admin.ModelAdmin):
    list_display = ["name", "description", "img", "created_by"]
    list_filter = ["name", "img"]
    search_fields = ["name"]


class PlacesAdmin(admin.ModelAdmin):
    list_display = ["name", "description", "slug", "address", "genres", "img", "created_by"]
    list_filter = ["name", "genres"]
    search_fields = ["name"]


admin.site.register(Places, PlacesAdmin)
admin.site.register(Images, ImagesAdmin)
admin.site.register(Genres, GenresAdmin)
admin.site.register(Address, AddressAdmin)
admin.site.register(Coordinates, CoordinatesAdmin)


class ImagesAdmin(ModelAdmin):
    model = Images
    menu_label = "Images"
    menu_icon = "user"
    menu_order = 290
    list_display = ("name", "description", "img", "created_by")
    list_filter = ["name", "created_by"]
    search_fields = ["name", "description", "img"]


class PlacesAdmin(ModelAdmin):
    model = Places
    menu_label = "Places"
    menu_icon = "user"
    menu_order = 290
    list_display = ("name", "description", "slug", "address", "genres", "img", "created_by")
    list_filter = ["name", "genres"]
    search_fields = ["name", "genres"]


modeladmin_register(PlacesAdmin)
modeladmin_register(ImagesAdmin)
