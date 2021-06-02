from django.contrib.auth.models import User


class UserProfile(User):
    class Meta:
        proxy = True

    @property
    def likes(self):
        return self.user_likes.all().count()

    @property
    def liked(self):
        return self.user_likes.all()

    @property
    def comments(self):
        return self.user_comments.all().count()

    @property
    def commented(self):
        return self.user_comments.all()

    @property
    def bookmarks(self):
        return self.bookmark_user.all()

    @property
    def comment_likes(self):
        return self.user_comment_likes.all()
