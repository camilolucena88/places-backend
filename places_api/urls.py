from django.urls import path, include
from rest_framework import routers
from places_api.views import PlacesViewSet, LikesView
from users_api.views import UserProfileDetail

router = routers.DefaultRouter()
router.register(r'view', PlacesViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("like", LikesView.as_view()),
    path("like/<int:pk>", LikesView.as_view()),
]
