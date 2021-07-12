from datetime import datetime

from django.contrib import messages
from django.shortcuts import render, redirect
from wagtail.images.models import Image
from listing.forms import ListingModelForm, ListingOpeningModelForm
from listing.models import Listing
from payments.views import request_verification
from places.forms import PlacesModelForm, CoordinatesModelFrom


def format_time(param):
    return datetime.strptime(param, '%H:%M').strftime("%H:%M:%S")


def create(request):
    monday_form = ListingOpeningModelForm(initial={'weekday': 1})
    tuesday_form = ListingOpeningModelForm(initial={'weekday': 2})
    wednesday_form = ListingOpeningModelForm(initial={'weekday': 3})
    thursday_form = ListingOpeningModelForm(initial={'weekday': 4})
    friday_form = ListingOpeningModelForm(initial={'weekday': 5})
    saturday_form = ListingOpeningModelForm(initial={'weekday': 6})
    sunday_form = ListingOpeningModelForm(initial={'weekday': 7})
    if request.method == 'POST':
        coordinates = CoordinatesModelFrom(request.POST)
        if coordinates.is_valid():
            place_coordinates = coordinates.save()
            places = PlacesModelForm(data={
                "name": request.POST['name'],
                "description": request.POST['description'],
                'slug': request.POST['slug'],
                'coordinates': place_coordinates,
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
                    'country': request.POST['country'],
                    'places': place,
                    'created_by': request.user
                })
                if listing.is_valid():
                    listingSaved = listing.save()
                    monday_form = ListingOpeningModelForm(data={
                        'listing': listingSaved,
                        'weekday': 1,
                        'from_hour': format_time(request.POST['monday_opening']),
                        'to_hour': format_time(request.POST['monday_closing']),
                        'closed': False,
                        'open_all_day': False,
                    })
                    tuesday_form = ListingOpeningModelForm(data={
                        'listing': listingSaved,
                        'weekday': 2,
                        'from_hour': format_time(request.POST['tuesday_opening']),
                        'to_hour': format_time(request.POST['tuesday_closing']),
                        'closed': False,
                        'open_all_day': False,
                    })
                    wednesday_form = ListingOpeningModelForm(data={
                        'listing': listingSaved,
                        'weekday': 3,
                        'from_hour': format_time(request.POST['wednesday_opening']),
                        'to_hour': format_time(request.POST['wednesday_closing']),
                        'closed': False,
                    })
                    thursday_form = ListingOpeningModelForm(data={
                        'listing': listingSaved,
                        'weekday': 4,
                        'from_hour': format_time(request.POST['thursday_opening']),
                        'to_hour': format_time(request.POST['thursday_closing']),
                        'closed': False,
                        'open_all_day': False,
                    })
                    friday_form = ListingOpeningModelForm(data={
                        'listing': listingSaved,
                        'weekday': 5,
                        'from_hour': format_time(request.POST['friday_opening']),
                        'to_hour': format_time(request.POST['friday_closing']),
                        'closed': False,
                        'open_all_day': False,
                    })
                    saturday_form = ListingOpeningModelForm(data={
                        'listing': listingSaved,
                        'weekday': 6,
                        'from_hour': format_time(request.POST['saturday_opening']),
                        'to_hour': format_time(request.POST['saturday_closing']),
                        'closed': False,
                        'open_all_day': False,
                    })
                    sunday_form = ListingOpeningModelForm(data={
                        'listing': listingSaved,
                        'weekday': 7,
                        'from_hour': format_time(request.POST['sunday_opening']),
                        'to_hour': format_time(request.POST['sunday_closing']),
                        'closed': False,
                        'open_all_day': False,
                    })
                    if monday_form.is_valid() and tuesday_form.is_valid() and wednesday_form.is_valid() and thursday_form.is_valid() and friday_form.is_valid() and saturday_form.is_valid() and sunday_form.is_valid():
                        monday_form.save()
                        tuesday_form.save()
                        wednesday_form.save()
                        thursday_form.save()
                        friday_form.save()
                        saturday_form.save()
                        sunday_form.save()
                        return redirect('/listings/view/' + str(listingSaved.id))
                raise ValueError(monday_form.is_valid(), monday_form.errors)
            raise ValueError(places.is_valid(), places.errors)
        raise ValueError(coordinates.is_valid(), coordinates.errors)
    return render(request, "listing/create.html",
                  {'places_form': PlacesModelForm(),
                   'listing_form': ListingModelForm(),
                   'monday_form': monday_form,
                   'tuesday_form': tuesday_form,
                   'wednesday_form': wednesday_form,
                   'thursday_form': thursday_form,
                   'friday_form': friday_form,
                   'saturday_form': saturday_form,
                   'sunday_form': sunday_form,
                   'coordinates_form': CoordinatesModelFrom()
                   })


def view(request):
    if request_verification(request):
        return redirect('/_util/login')
    listings = Listing.objects.all()
    return render(request, 'listing/view.html', {'listings': listings})


def view_one(request, listing_id):
    if request_verification(request):
        return redirect('/_util/login')
    listing = Listing.objects.get(pk=listing_id)
    monday_opening_hours = listing.monday_hours
    tuesday_opening_hours = listing.tuesday_hours
    wednesday_opening_hours = listing.wednesday_hours
    thursday_opening_hours = listing.thursday_hours
    friday_opening_hours = listing.friday_hours
    saturday_opening_hours = listing.saturday_hours
    sunday_opening_hours = listing.sunday_hours
    coordinates = CoordinatesModelFrom(request.POST)
    if coordinates.is_valid():
        place_coordinates = coordinates.save()
        if request.method == 'POST':
            places = PlacesModelForm(data={
                    "name": request.POST['name'],
                    "description": request.POST['description'],
                    'slug': request.POST['slug'],
                    'coordinates': place_coordinates,
                    'genres': [request.POST['genres']],
                    'img_render': listing.places.img_render,
                    'created_by': request.user
                }, instance=listing.places)
            if places.is_valid():
                places.save()
                listing_form = ListingModelForm(data={
                    "telephone": request.POST['telephone'],
                    "address": request.POST['address'],
                    'city': request.POST['city'],
                    'country': request.POST['country'],
                    'created_by': request.user,
                    'places': listing.places
                }, instance=listing)
                if listing_form.is_valid():
                    listing_form.save()
                    monday_form = ListingOpeningModelForm(data={
                        'weekday': 1,
                        'from_hour': format_time(request.POST['monday_opening']),
                        'to_hour': format_time(request.POST['monday_closing']),
                        'closed': False,
                        'open_all_day': False,
                        'listing': listing
                    }, instance=monday_opening_hours)
                    tuesday_form = ListingOpeningModelForm(data={
                        'weekday': 2,
                        'from_hour': format_time(request.POST['tuesday_opening']),
                        'to_hour': format_time(request.POST['tuesday_closing']),
                        'closed': False,
                        'open_all_day': False,
                        'listing': listing
                    }, instance=tuesday_opening_hours)
                    wednesday_form = ListingOpeningModelForm(data={
                        'weekday': 3,
                        'from_hour': format_time(request.POST['wednesday_opening']),
                        'to_hour': format_time(request.POST['wednesday_closing']),
                        'closed': False,
                        'open_all_day': False,
                        'listing': listing
                    }, instance=wednesday_opening_hours)
                    thursday_form = ListingOpeningModelForm(data={
                        'weekday': 4,
                        'from_hour': format_time(request.POST['thursday_opening']),
                        'to_hour': format_time(request.POST['thursday_closing']),
                        'closed': False,
                        'open_all_day': False,
                        'listing': listing
                    }, instance=thursday_opening_hours)
                    friday_form = ListingOpeningModelForm(data={
                        'weekday': 5,
                        'from_hour': format_time(request.POST['friday_opening']),
                        'to_hour': format_time(request.POST['friday_closing']),
                        'closed': False,
                        'open_all_day': False,
                        'listing': listing
                    }, instance=friday_opening_hours)
                    saturday_form = ListingOpeningModelForm(data={
                        'weekday': 6,
                        'from_hour': format_time(request.POST['saturday_opening']),
                        'to_hour': format_time(request.POST['saturday_closing']),
                        'closed': False,
                        'open_all_day': False,
                        'listing': listing
                    }, instance=saturday_opening_hours)
                    sunday_form = ListingOpeningModelForm(data={
                        'weekday': 7,
                        'from_hour': format_time(request.POST['sunday_opening']),
                        'to_hour': format_time(request.POST['sunday_closing']),
                        'closed': False,
                        'open_all_day': False,
                        'listing': listing
                    }, instance=sunday_opening_hours)
                    if monday_form.is_valid() and tuesday_form.is_valid() and wednesday_form.is_valid() and thursday_form.is_valid() and friday_form.is_valid() and saturday_form.is_valid() and sunday_form.is_valid():
                        monday_form.save()
                        tuesday_form.save()
                        wednesday_form.save()
                        thursday_form.save()
                        friday_form.save()
                        saturday_form.save()
                        sunday_form.save()
                        messages.success(request, 'Listing details updated.')
                        return redirect('/listings/view/' + str(listing_id))
                    else:
                        raise ValueError(monday_form.errors)
                        messages.error(request, monday_form.errors)
                else:
                    messages.error(request, listing_form.errors)
            else:
                messages.error(request, places.errors)
    return render(request, "listing/view_one.html",
                  {'places_form': PlacesModelForm(instance=listing.places),
                   'listing_form': ListingModelForm(instance=listing),
                   'listing': listing,
                   'monday_form': ListingOpeningModelForm(instance=monday_opening_hours),
                   'tuesday_form': ListingOpeningModelForm(instance=tuesday_opening_hours),
                   'wednesday_form': ListingOpeningModelForm(instance=wednesday_opening_hours),
                   'thursday_form': ListingOpeningModelForm(instance=thursday_opening_hours),
                   'friday_form': ListingOpeningModelForm(instance=friday_opening_hours),
                   'saturday_form': ListingOpeningModelForm(instance=saturday_opening_hours),
                   'sunday_form': ListingOpeningModelForm(instance=sunday_opening_hours),
                   'coordinates_form': CoordinatesModelFrom(instance=listing.places.coordinates)
                   })


def edit(request, listing_id):
    if request.method == 'POST':
        ListingModelForm(request.POST)
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
                return redirect('/listings/view/' + listing_id)
    return redirect('/admin/listing/listing/')
