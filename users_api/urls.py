from django.urls import path, include
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns

from users_api import views

router = routers.DefaultRouter()

urlpatterns = [
    path("", views.UserProfileList.as_view()),
    path("<slug:username>", views.UserProfileDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)
