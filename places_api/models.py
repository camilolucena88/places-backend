from django.db import models


class PlacesRequest(models.Model):
    request = models.JSONField('Request', null=True, blank=True)
    response = models.JSONField('Response', null=True, blank=True)
    status = models.IntegerField('Status', null=True, blank=True)
    error = models.TextField('Error', null=True, blank=True)
    ip = models.GenericIPAddressField('IP', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)