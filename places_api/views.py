from rest_framework import viewsets

from places.models import Places
from places_api.serializers import PlacesSerializer


class PlacesViewSet(viewsets.ModelViewSet):
    queryset = Places.objects.all()
    serializer_class = PlacesSerializer
