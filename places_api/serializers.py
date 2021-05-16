from rest_framework import serializers
from rest_framework.authtoken.admin import User

from authentication.serializers import UserSerializer
from places.models import Places


class PlacesSerializer(serializers.HyperlinkedModelSerializer):
    created_by = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Places
        fields = ['name', 'description', 'slug', 'address', 'genres', 'img', 'created_by']
