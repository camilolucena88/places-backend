from rest_framework import serializers
from places.models import Places, Genres, Comments, Bookmark


class GenresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genres
        fields = ['slug']


class CommentsSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(source='pk')
    timestamp = serializers.CharField(source='created_at')
    comment = serializers.CharField(source='description')

    class Meta:
        model = Comments
        fields = ['id', 'comment', 'timestamp', 'created_by']


class PlacesSerializer(serializers.ModelSerializer):
    img = serializers.CharField(read_only=True)
    comments = CommentsSerializer(read_only=True, many=True)
    key = serializers.CharField(source='slug')
    genres = GenresSerializer(read_only=True, many=True)

    class Meta:
        model = Places
        fields = ['id', 'name', 'description', 'key', 'address', 'genres', 'likes', 'comments', 'img', 'rate']


class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = ['place', 'created_by']


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['description', 'type', 'place', 'parent', 'created_by']
