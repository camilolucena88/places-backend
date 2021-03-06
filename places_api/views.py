from django.http import Http404
from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from places.models import Places, Likes, Bookmark, CommentLikes
from places_api.serializers import PlacesSerializer, BookmarkSerializer, CommentSerializer, CommentLikeSerializer
from users_api.serializers import LikeSerializer


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

    def post(self, request, pk):
        serializer = LikeSerializer(data={'place': pk, 'created_by': request.user.id})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        like = Likes.objects.get(place_id=pk, created_by=request.user.id)
        like.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class BookmarkView(APIView):
    def post(self, request, pk):
        serializer = BookmarkSerializer(data={'place': pk, 'created_by': request.user.id})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        like = Bookmark.objects.get(place_id=pk, created_by=request.user.id)
        like.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CommentView(APIView):
    def post(self, request, pk):
        serializer = CommentSerializer(
            data={
                'description': request.data['description'],
                'type': 0,
                'place': pk,
                'created_by': request.user.id
            }
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        like = Bookmark.objects.get(place_id=pk, created_by=request.user.id)
        like.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CommentLikeView(APIView):
    def post(self, request, pk, comment_id):
        serializer = CommentLikeSerializer(
            data={
                'place': pk,
                'type': 1,
                'comment': comment_id,
                'created_by': request.user.id
            })
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, comment_id):
        like = CommentLikes.objects.get(place_id=pk, created_by=request.user.id, comment_id=comment_id)
        like.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
