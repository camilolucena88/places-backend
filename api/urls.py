from django.urls import path, include
from rest_framework import routers
from api.views import UserViewSet, check_username, check_email, ListingViewSet, create_activities

router = routers.DefaultRouter()
router.register(r'users', UserViewSet, 'users')
router.register(r'listings', ListingViewSet, 'listings')

urlpatterns = [
    path("", include(router.urls)),
    path("verify/username", check_username),
    path("verify/email", check_email),
]