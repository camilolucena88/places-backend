from wagtail.contrib.modeladmin.options import ModelAdmin
from wagtail.contrib.modeladmin.options import modeladmin_register
from django.contrib import admin

from places.models import Places, Images, Genres, Address, Coordinates, Likes, Comments, Rate, Bookmark


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
    list_display = ["name", "description", "slug", "address", "img", "created_by"]
    list_filter = ["name"]
    search_fields = ["name"]


admin.site.register(Places, PlacesAdmin)
admin.site.register(Images, ImagesAdmin)
admin.site.register(Genres, GenresAdmin)
admin.site.register(Address, AddressAdmin)
admin.site.register(Coordinates, CoordinatesAdmin)


class GenresAdmin(ModelAdmin):
    model = Genres
    menu_label = "Genres"
    menu_icon = "user"
    menu_order = 290
    list_display = ("name", "description", "slug", "created_by")
    list_filter = ["name", "created_by"]
    search_fields = ["name", "description", "slug"]


class LikesAdmin(ModelAdmin):
    model = Likes
    menu_label = "Likes"
    menu_icon = "user"
    menu_order = 290
    list_display = ("place", "type", "created_by")
    search_fields = ["place__name"]


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
    list_filter = ["name"]
    search_fields = ["name"]


class CommentsAdmin(ModelAdmin):
    model = Comments
    menu_label = "Comments"
    menu_icon = "user"
    menu_order = 290
    list_display = ("pk", "description", "place", "type", "created_by")
    search_fields = ["place__name"]


class RateAdmin(ModelAdmin):
    model = Rate
    menu_label = "Rate"
    menu_icon = "user"
    menu_order = 290
    list_display = ("place", "rate", "created_by")
    search_fields = ["place__name"]


class BookmarkAdmin(ModelAdmin):
    model = Bookmark
    menu_label = "Bookmark"
    menu_icon = "user"
    menu_order = 290
    list_display = ('pk', 'place', 'created_by', 'created_at')
    search_fields = ["place__name"]


modeladmin_register(PlacesAdmin)
modeladmin_register(ImagesAdmin)
modeladmin_register(GenresAdmin)
modeladmin_register(LikesAdmin)
modeladmin_register(CommentsAdmin)
modeladmin_register(RateAdmin)
modeladmin_register(BookmarkAdmin)
