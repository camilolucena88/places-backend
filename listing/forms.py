from django import forms
from django.forms import TextInput, Select

from listing.models import Listing, OpeningHours

class ListingModelForm(forms.ModelForm):
    class Meta:
        model = Listing
        fields = ['telephone', 'address', 'city', 'country', 'places', 'created_by']
        widgets = {
            'telephone': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'address': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'city': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'country': Select(attrs={'class': 'form-control form-control-solid form-control-lg'}),
        }


class ListingOpeningModelForm(forms.ModelForm):
    class Meta:
        model = OpeningHours
        fields = ['listing', 'weekday', 'from_hour', 'to_hour', 'closed', 'open_all_day']
        widgets = {
            'listing': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'weekday': Select(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'from_hour': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'to_hour': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'closed': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'open_all_day': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
        }