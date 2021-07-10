from fileinput import FileInput

from django import forms
from django.forms import TextInput, Textarea, Select, ClearableFileInput

from places.models import Places, Genres, Coordinates


def genres_options():
    if Genres.DoesNotExist:
        return []
    return [(choice.pk, choice) for choice in Genres.objects.all()]


class PlacesModelForm(forms.ModelForm):
    class Meta:
        model = Places
        fields = ['name', 'description', 'slug', 'genres', 'img_render', 'created_by', 'coordinates']
        widgets = {
            'name': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'description': Textarea(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'slug': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'genres': Select(choices=genres_options(),
                             attrs={'class': 'form-control form-control-solid form-control-lg'}),
        }


class CoordinatesModelFrom(forms.ModelForm):
    class Meta:
        model = Coordinates
        fields = ['lat', 'lon']
        widgets = {
            'lat': TextInput(
                attrs={'class': 'form-control form-control-solid form-control-lg', 'placeholder': "latitude",
                       'id': 'latitude'}),
            'lon': TextInput(
                attrs={'class': 'form-control form-control-solid form-control-lg', 'placeholder': "longitude",
                       'id': 'longitude'}),
        }
