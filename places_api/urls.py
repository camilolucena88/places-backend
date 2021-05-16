from django.urls import path, include
from rest_framework import routers

from authentication.views import HelloWorldView
from places_api.views import PlacesViewSet

router = routers.DefaultRouter()
router.register(r'view', PlacesViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
