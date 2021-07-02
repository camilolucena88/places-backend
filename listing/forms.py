from django import forms
from django.forms import TextInput

from listing.models import Listing
from places.models import Images


class ListingModelForm(forms.ModelForm):
    class Meta:
        model = Listing
        fields = ['telephone', 'address', 'city', 'country', 'places', 'created_by']
        widgets = {
            'telephone': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'address': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'city': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'country': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
        }