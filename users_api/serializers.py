from rest_framework import serializers

from places.models import Likes, Bookmark, CommentLikes
from places_api.serializers import CommentsSerializer
from users_api.models import UserProfile


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = ['place', 'created_by']

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Likes.objects.create(**validated_data)

    def delete(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Likes.objects.create(**validated_data)


class LikedSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(source='pk')
    timestamp = serializers.CharField(source='created_at')

    class Meta:
        model = Likes
        fields = ['id', 'place', 'created_by', 'timestamp']
        depth = 1

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Likes.objects.create(**validated_data)


class BookmarkSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(source='pk')
    timestamp = serializers.CharField(source='created_at')

    class Meta:
        model = Bookmark
        fields = ['id', 'place', 'created_by', 'timestamp']
        depth = 1


class LikedCommentsSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(source='pk')
    timestamp = serializers.CharField(source='created_at')

    class Meta:
        model = CommentLikes
        fields = ['id', 'comment', 'place', 'created_by', 'timestamp']
        depth = 1


class UserProfileSerializer(serializers.HyperlinkedModelSerializer):
    comment_likes = LikedCommentsSerializer(read_only=True, many=True, allow_null=True)
    commented = CommentsSerializer(read_only=True, many=True, allow_null=True)
    liked = LikedSerializer(read_only=True, many=True)
    bookmarks = BookmarkSerializer(read_only=True, many=True, allow_null=True)

    class Meta:
        model = UserProfile
        fields = ['username', 'first_name', 'last_name', 'email', 'commented', 'liked', 'bookmarks', 'comment_likes']
