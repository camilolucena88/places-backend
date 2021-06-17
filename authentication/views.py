from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import viewsets, generics, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from authentication.serializers import UserSerializer, RegisterSerializer


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
        # if request.method == 'POST':
        #     # create a form instance and populate it with data from the request:
        #     register_form = UserStudentForm(request.POST)
        #     # check whether it's valid:
        #     new_user = register_form.save()
        #
        #     if register_form.is_valid():
        #         new_user.save()
        #         user = User.objects.get(id=new_user.id)
        #         student_group = Group.objects.get(name='Estudiantes')
        #         user.groups.add(student_group)
        #         student_form = StudentForm(request.POST, instance=user)
        #         if student_form.is_valid():
        #             student_form.save()
        #             student = Students(user=user,
        #                                dob=datetime.strptime(request.POST.get('dob'), '%d/%m/%Y'),
        #                                country=request.POST.get('country'),
        #                                city=request.POST.get('city'),
        #                                telephone=request.POST.get('telephone'),
        #                                address=request.POST.get('address'),
        #                                current_course=Courses.objects.get(id=request.POST.get('current_course')),
        #                                )
        #             student.save()
        #             payment_group = PaymentGroups.objects.get(name='Primaria')
        #             user.paymentgroups_set.add(payment_group)
        #             messages.success(request, 'Recibiras un email una vez sea aprobada.')
        #             return redirect('/_util/login')
    return render(request, "register/register.html")
