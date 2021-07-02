from django.shortcuts import render

# Create your views here.
from wagtail.images.models import Image

from listing.forms import ListingModelForm
from places.forms import PlacesModelForm


def create(request):
    if request.method == 'POST':
        places = PlacesModelForm(data={
            "name": request.POST['name'],
            "description": request.POST['description'],
            'slug': request.POST['slug'],
            'genres': [request.POST['genres']],
            'img_render': Image.objects.get(pk=request.POST['img']),
            'created_by': request.user
        })
        if places.is_valid():
            place = places.save()
            listing = ListingModelForm(data={
                "telephone": request.POST['telephone'],
                "address": request.POST['address'],
                'city': request.POST['city'],
                'country': [request.POST['country']],
                'places': place,
                'created_by': request.user
            })
            if listing.is_valid():
                listing.save()
                return render(request, "listing/create.html",
                              {'places_form': PlacesModelForm(), 'listing_form': ListingModelForm()})
            raise ValueError(listing.is_valid(), listing.errors)
        raise ValueError(places.is_valid(), places.errors)
    return render(request, "listing/create.html",
                  {'places_form': PlacesModelForm(), 'listing_form': ListingModelForm()})


def view(request):
    return None
