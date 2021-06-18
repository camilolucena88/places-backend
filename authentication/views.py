from django.contrib import messages
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from rest_framework import viewsets, generics, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from authentication.forms import UserForm, BusinessForm
from authentication.serializers import UserSerializer, RegisterSerializer
from listing.models import Business, Sector


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


class HelloWorldView(APIView):

    def get(self, request):
        return Response(data={"hello": "world"}, status=status.HTTP_200_OK)


def register(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        pass
        if request.method == 'POST':
            # create a form instance and populate it with data from the request:
            register_form = UserForm(request.POST)
            # check whether it's valid:
            new_user = register_form.save()

            if register_form.is_valid():
                new_user.save()
                user = User.objects.get(id=new_user.id)
                student_form = BusinessForm(request.POST, instance=user)
                if student_form.is_valid():
                    student_form.save()
                    student = Business(created_by=user,
                                       name=request.POST.get('name'),
                                       business_email=request.POST.get('business_email'),
                                       country=request.POST.get('country'),
                                       city=request.POST.get('city'),
                                       telephone=request.POST.get('telephone'),
                                       address=request.POST.get('address'),
                                       business_type=request.POST.get('business_type'),
                                       account_type=request.POST.get('account_type'),
                                       sector=Sector.objects.get(id=request.POST.get('sector')),
                                       )
                    student.save()
                    messages.success(request, 'Recibiras un email una vez sea aprobada.')
                    return redirect('/_util/login')
    return render(request, "register/register.html", {'register_form': UserForm(), 'business_form': BusinessForm()})
