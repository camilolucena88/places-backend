from rest_framework import serializers
from places.models import Places, Genres, Comments, Bookmark, CommentLikes, Images


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
        fields = ['id', 'comment', 'likes', 'timestamp', 'created_by']


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ['img', 'created_by']


class PlacesSerializer(serializers.ModelSerializer):
    img = serializers.CharField(read_only=True)
    thumbnail = serializers.CharField(read_only=True, allow_null=True)
    comments = CommentsSerializer(read_only=True, many=True)
    key = serializers.CharField(source='slug')
    genres = GenresSerializer(read_only=True, many=True)

    class Meta:
        model = Places
        fields = ['id', 'name', 'description', 'key', 'address', 'genres', 'likes', 'comments', 'img', 'thumbnail',
                  'rate']


class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = ['place', 'created_by']


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['description', 'type', 'place', 'parent', 'created_by']


class CommentLikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentLikes
        fields = ['place', 'comment', 'created_by']

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return CommentLikes.objects.create(**validated_data)

    def delete(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return CommentLikes.objects.create(**validated_data)
