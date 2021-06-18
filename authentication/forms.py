from django import forms
from django.contrib.auth import password_validation
from django.contrib.auth.forms import UserCreationForm
from django.forms import TextInput, EmailInput, Textarea, Select
from django.utils.translation import gettext_lazy as _

from listing.models import UserHelper, Business, Sector


class UserForm(UserCreationForm):
    password1 = forms.CharField(
        label=_("Password"),
        strip=False,
        widget=forms.PasswordInput(
            attrs={'class': 'form-control form-control-solid form-control-lg', 'placeholder': 'Password',
                   'autocomplete': 'new-password'}),
        help_text=password_validation.password_validators_help_text_html(),
    )
    password2 = forms.CharField(
        label=_("Password confirmation"),
        widget=forms.PasswordInput(
            attrs={'class': 'form-control form-control-solid form-control-lg', 'placeholder': 'Password',
                   'autocomplete': 'new-password'}
        ),
        strip=False,
        help_text=_("Enter the same password as before, for verification."),
    )

    class Meta:
        model = UserHelper
        fields = ['username', 'email', 'first_name', 'last_name', 'password1', 'password2']
        widgets = {
            'username': TextInput(
                attrs={'class': 'form-control form-control-solid form-control-lg', 'placeholder': 'Username'}
            ),
            'email': EmailInput(
                attrs={'class': 'form-control form-control-solid form-control-lg', 'placeholder': 'Email'}
            ),
            'first_name': TextInput(
                attrs={'class': 'form-control form-control-solid form-control-lg', 'placeholder': 'First Name'}
            ),
            'last_name': TextInput(
                attrs={'class': 'form-control form-control-solid form-control-lg', 'placeholder': 'Last Name'}
            ),
        }


def business_sectors():
    if Sector.DoesNotExist:
        return []
    return [(choice.pk, choice) for choice in Sector.objects.all()]


class BusinessForm(forms.ModelForm):
    class Meta:
        model = Business
        fields = ['name', 'business_email', 'telephone', 'address', 'city', 'country', 'business_type', 'sector', 'account_type']
        widgets = {
            'name': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'business_email': EmailInput(
                attrs={'class': 'form-control form-control-solid form-control-lg', 'placeholder': 'Email'}),
            'telephone': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'address': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'city': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'country': TextInput(attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'business_type': Select(attrs={'class': 'form-control'}, choices=Business.BUSINESS_TYPE),
            'sector': Select(choices=business_sectors(),
                             attrs={'class': 'form-control form-control-solid form-control-lg'}),
            'account_type': Select(attrs={'class': 'form-control'}, choices=Business.ACCOUNT_TYPE),
        }
