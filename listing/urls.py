from django.urls import path
from listing.views import create, view

urlpatterns = [
    path("create", create),
    path("view", view),
]
