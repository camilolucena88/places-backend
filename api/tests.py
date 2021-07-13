from django.contrib.auth.models import User
from django.test import RequestFactory, TestCase
from rest_framework.test import APIRequestFactory
from api.views import UserViewSet, check_username, check_email, ListingViewSet, create_activities


class CheckEmailApiTest(TestCase):
    def test_email_available_with_no_parameters(self):
        """ 
        Test email availability endpoint without any parameter
        """
        factory = APIRequestFactory()
        request = factory.post('verify/email')
        response = check_email(request)
        self.assertEqual(response.status_code, 422)
        self.assertEqual(response.content, b'{"error": "Missing parameters email"}')

    def test_email_available_with_wrong_parameters(self):
        """
        Test email availability endpoint without wrong parameter
        """
        factory = APIRequestFactory()
        request = factory.post('verify/email', {'username': 'test@test.com'})
        response = check_email(request)
        self.assertEqual(response.status_code, 422)
        self.assertEqual(response.content, b'{"error": "Missing parameters email"}')

    def test_email_available(self):
        """
        Tests an email that it is available and not created yet
        """
        factory = APIRequestFactory()
        request = factory.post('verify/email', {'email': 'test@test.com'})
        response = check_email(request)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, b'{"valid": true}')

    def test_email_unavailable(self):
        """
        Tests an email that it was created already, it should return false
        """
        self.user = User.objects.create_user(
            username='test', email='test@test.com', password='test')
        factory = APIRequestFactory()
        request = factory.post('verify/email', {'email': 'test@test.com'})
        response = check_email(request)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, b'{"valid": false}')

    def test_username_available(self):
        """
        Tests an username that it is available and not created yet
        """
        factory = APIRequestFactory()
        request = factory.post('verify/username', {'username': 'test'})
        response = check_username(request)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, b'{"valid": true}')

    def test_username_unavailable(self):
        """
        Tests an username that it was created already, it should return false
        """
        self.user = User.objects.create_user(
            username='test', email='test@test.com', password='test')
        factory = APIRequestFactory()
        request = factory.post('verify/username', {'username': 'test'})
        response = check_username(request)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, b'{"valid": false}')
