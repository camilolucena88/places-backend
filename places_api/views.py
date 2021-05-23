from django.http import Http404
from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from places.models import Places, Likes
from places_api.serializers import PlacesSerializer
from users_api.serializers import LikedSerializer, LikeSerializer


class PlacesViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny,)
    queryset = Places.objects.all()
    serializer_class = PlacesSerializer


class LikesView(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, request, pk):
        try:
            return Likes.objects.get(pk=pk, created_by=request.user)
        except Likes.DoesNotExist:
            raise Http404

    def post(self, request):
        serializer = LikeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        like = self.get_object(request, pk)
        like.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)