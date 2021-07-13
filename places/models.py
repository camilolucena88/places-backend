import os

from django.db import models
from django.db.models import Avg
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User
from wagtail.images.models import Image
from wagtail.images.models import Rendition


class Coordinates(models.Model):
    lat = models.CharField(max_length=50)
    lon = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Genres(models.Model):
    name = models.CharField('Name', max_length=50)
    description = models.TextField('Description', max_length=150)
    slug = models.SlugField('Slug')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.slug


class Images(models.Model):
    name = models.CharField('Name', max_length=50)
    description = models.TextField('Description', max_length=150)
    img = models.FileField("Image", upload_to="files/notifications")
    img_render = models.ForeignKey(Image, on_delete=models.CASCADE, null=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def filename(self):
        return os.path.basename(self.img.name)

    @property
    def cover_img(self):
        return self.img_render

    def __str__(self):
        return self.filename

    @property
    def custom_thumbnail(self):
        if self.img_render.renditions.filter(width=275, height=185).count() > 0:
            return self.img_render.renditions.filter(width=275, height=185)[0]
        else:
            return self.img_render.get_rendition('fill-275x185|jpegquality-80').url

    @property
    def thumbnail(self):
        if self.img_render.renditions.filter(width=165).count() > 0:
            return self.img_render.renditions.get(width=165)
        else:
            return self.img_render.get_rendition('fill-300x150|jpegquality-60').url



class Places(models.Model):
    name = models.CharField('Name', max_length=50)
    description = models.TextField('Description', max_length=300)
    coordinates = models.ForeignKey(Coordinates, on_delete=models.CASCADE, null=True)
    slug = models.SlugField('Slug')
    genres = models.ManyToManyField(Genres, blank=True, related_name='places_genres')
    img = models.ForeignKey(Images, on_delete=models.CASCADE, null=True, blank=True)
    img_render = models.ForeignKey(Image, on_delete=models.CASCADE, null=True, blank=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    NO_IMG_FILE = '/media/original_images/no-image-icon.png'

    def __str__(self):
        return self.name

    def feature_img(self):
        if self.img_render is not None:
            return self.img_render.file.url
        elif self.img is not None:
            return self.img.img.url
        else:
            return self.NO_IMG_FILE

    @property
    def likes(self):
        return self.places_like.count()

    @property
    def comments(self):
        return self.places_comment.all()

    @property
    def rate(self):
        return self.places_rate.all().aggregate(Avg('rate'))['rate__avg']

    @property
    def cover_img(self):
        return self.img.url

    @property
    def custom_thumbnail(self):
        if self.img_render.renditions.filter(width=275, height=185).count() > 0:
            return self.img_render.renditions.filter(width=275, height=185)[0]
        else:
            return self.img_render.get_rendition('fill-275x185|jpegquality-80').url

    @property
    def thumbnail(self):
        if self.img_render:
            if self.img_render.renditions.filter(width=165).count() > 0:
                return self.img_render.renditions.get(width=165).url
            else:
                return self.img_render.get_rendition('fill-300x150|jpegquality-60').url
        elif self.img is not None:
            return self.img.img.url
        else:
            return self.NO_IMG_FILE


class RateList(models.IntegerChoices):
    ONE_STARS = 1, _('1 Star')
    TWO_STARS = 2, _('2 Star')
    THREE_STARS = 3, _('3 Star')
    FOUR_STARS = 4, _('4 Star')
    FIVE_STARTS = 5, _('5 Star')


class Rate(models.Model):
    place = models.ForeignKey(Places, on_delete=models.CASCADE, related_name='places_rate')
    rate = models.PositiveSmallIntegerField('Rate', choices=RateList.choices)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class CommentType(models.IntegerChoices):
    PLACES_LIKE = 0, _('Places')
    COMMENTS_LIKE = 1, _('Reply')


class Comments(models.Model):
    description = models.TextField('Description', max_length=150)
    type = models.PositiveSmallIntegerField('Type', choices=CommentType.choices)
    place = models.ForeignKey(Places, on_delete=models.CASCADE, related_name='places_comment')
    parent = models.ForeignKey("self", on_delete=models.CASCADE, blank=True, null=True, related_name='parent_comment')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_comments')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Comments"
        verbose_name = "Comment"
        ordering = ('created_at',)

    def __str__(self):
        return self.description

    @property
    def likes(self):
        return self.comment_like.count()


class Likes(models.Model):
    place = models.ForeignKey(Places, on_delete=models.CASCADE, related_name='places_like')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_likes')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Likes"
        verbose_name = "Like"
        ordering = ('created_at',)
        unique_together = ['place', 'created_by']

    def __str__(self):
        return self.place.name


class CommentLikes(models.Model):
    place = models.ForeignKey(Places, on_delete=models.CASCADE, related_name='places_comment_likes')
    comment = models.ForeignKey(Comments, on_delete=models.CASCADE, blank=True, null=True, related_name='comment_like')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_comment_likes')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Comment Likes"
        verbose_name = "Comment Like"
        ordering = ('created_at',)
        unique_together = ['created_by', 'comment']

    def __str__(self):
        return self.place.name


class Bookmark(models.Model):
    place = models.ForeignKey(Places, on_delete=models.CASCADE)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookmark_user')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Bookmarks"
        verbose_name = "Bookmark"
        ordering = ('created_at',)
        unique_together = ['place', 'created_by']
