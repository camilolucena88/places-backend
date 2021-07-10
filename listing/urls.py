from django.urls import path
from listing.views import create, view, view_one, edit

urlpatterns = [
    path("create", create),
    path("view", view),
    path("view/<int:listing_id>", view_one),
    path("edit/<int:listing_id>", edit),
]
