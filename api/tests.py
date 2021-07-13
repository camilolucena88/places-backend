from django.test import TestCase
from rest_framework.test import APIRequestFactory
from api.views import UserViewSet, check_username, check_email, ListingViewSet, create_activities
from authentication.views import RegisterView


class CheckEmailApiTest(TestCase):
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
        view = RegisterView.as_view()
        factory = APIRequestFactory()
        request = factory.post('/api/auth/register', {'username': 'test', 'email': 'test@test.com', 'password': '3011'})
        response = view(request)
        self.assertEqual(response.status_code, 200)

        """After registration"""
        factory = APIRequestFactory()
        request = factory.post('verify/email', {'email': 'test@test.com'})
        response = check_email(request)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, b'{"valid": true}')
