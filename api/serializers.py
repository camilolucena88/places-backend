from django.contrib.auth.models import User
from rest_framework import serializers
from wagtail.users.models import UserProfile

from listing.models import Listing


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['avatar']


class UserSerializer(serializers.ModelSerializer):
    wagtail_userprofile = UserProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'wagtail_userprofile']


class ListingSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Listing
        fields = ['user']


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'username']