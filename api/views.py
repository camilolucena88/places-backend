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
        if username is not None:
            is_available = not User.objects.filter(username=username).exists()
            return JsonResponse({'valid': is_available})
        else:
            return JsonResponse({'error': 'Missing parameters username'}, status=422)


@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def check_email(request):
    if request.method == 'POST':
        email = request.data.get("email")
        if email is not None:
            is_available = not User.objects.filter(email=email).exists()
            return JsonResponse({'valid': is_available})
        else:
            return JsonResponse({'error': 'Missing parameters email'}, status=422)


def create_activities(request):
    if request.method == 'POST':
        raise ValueError(request.POST.get('max_duration'))
    return JsonResponse("405 Method Not Allowed", status=405)
