from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User


class Coordinates(models.Model):
    lat = models.CharField(max_length=50)
    lon = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Address(models.Model):
    address = models.CharField('Address', max_length=50)
    street = models.CharField('Street', max_length=50)
    city = models.CharField('City', max_length=50)
    state = models.CharField('State', max_length=50)
    country = models.CharField('Country', max_length=50)
    postcode = models.CharField('Postcode', max_length=50)
    coordinates = models.OneToOneField(Coordinates, on_delete=models.CASCADE, blank=True, null=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Genres(models.Model):
    name = models.CharField('Name', max_length=50)
    description = models.TextField('Description', max_length=150)
    slug = models.SlugField('Slug')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Images(models.Model):
    name = models.CharField('Name', max_length=50)
    description = models.TextField('Description', max_length=150)
    img = models.FileField("Imag", upload_to="files/notifications")
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Places(models.Model):
    name = models.CharField('Name', max_length=50)
    description = models.TextField('Description', max_length=150)
    slug = models.SlugField('Slug')
    address = models.OneToOneField(Address, on_delete=models.CASCADE, blank=True, null=True)
    genres = models.ForeignKey(Genres, on_delete=models.CASCADE, blank=True, null=True)
    img = models.ForeignKey(Images, on_delete=models.CASCADE, blank=True, null=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


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


class LikesType(models.IntegerChoices):
    PLACES_LIKE = 0, _('Places')
    COMMENTS_LIKE = 1, _('Comment')


class Likes(models.Model):
    place = models.ForeignKey(Places, on_delete=models.CASCADE, related_name='places_like')
    type = models.PositiveSmallIntegerField('Type', choices=LikesType.choices)
    comment = models.ForeignKey(Places, on_delete=models.CASCADE, blank=True, null=True, related_name='comment_like')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class CommentType(models.IntegerChoices):
    PLACES_LIKE = 0, _('Places')
    COMMENTS_LIKE = 1, _('Reply')


class Comments(models.Model):
    description = models.TextField('Description', max_length=150)
    type = models.PositiveSmallIntegerField('Type', choices=CommentType.choices)
    place = models.ForeignKey(Places, on_delete=models.CASCADE, related_name='related_place')
    parent = models.ForeignKey(Places, on_delete=models.CASCADE, blank=True, null=True, related_name='parent_comment')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_by')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Bookmark(models.Model):
    place = models.ForeignKey(Places, on_delete=models.CASCADE)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
