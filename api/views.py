from django.http import JsonResponse
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from api.serializers import UserSerializer, ListingSerializer
from listing.models import Listing


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [
        permissions.AllowAny
    ]


class ListingViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer
    permission_classes = [
        permissions.AllowAny
    ]


@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def check_username(request):
    if request.method == 'POST':
        username = request.data.get("username")
        is_available = not User.objects.filter(username=username).exists()
        return JsonResponse({'valid': is_available})


@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def check_email(request):
    if request.method == 'POST':
        email = request.data.get("email")
        is_available = not User.objects.filter(email=email).exists()
        return JsonResponse({'valid': is_available})


# def get_all_events(request):
#     if request.method == 'POST':
#         school = School.objects.get(pk=1)
#         school.events.all().exclude(type=6)
#         return JsonResponse({'valid': school})
#
#
# def get_school():
#     if School.DoesNotExist:
#         return Events.objects.all()
#     return School.objects.last().all_events()


# class EventsViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows classes to be viewed or edited.
#     """
#     queryset = get_school()
#     serializer_class = EventsSerializer
#     permission_classes = [
#         permissions.AllowAny
#     ]


# def course_schedule(request, course_id):
#     courses = Courses.objects.get(pk=course_id)
#     serializer_class = SubjectSerializer(courses.get_subjects(), many=True)
#     return JsonResponse(
#         serializer_class.data, safe=False
#     )


def create_activities(request):
    if request.method == 'POST':
        raise ValueError(request.POST.get('max_duration'))
    return JsonResponse("405 Method Not Allowed", status=405)
