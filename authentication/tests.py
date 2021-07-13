from django.test import TestCase


class CheckEmailApiTest(TestCase):
    def setUp(self) -> None:
        self.username = 'testuser'
        self.email = 'testuser@email.com'
        self.age = 20
        self.password = 'password'

    def test_registration(self):
        """
        A ``POST`` to the ``register`` view
        """
        response = self.client.post('/api/auth/register/',
                                    data={'username': 'test',
                                          'email': 'test@test.com',
                                          'password1': self.password,
                                          'password2': self.password
                                          })
        self.assertEqual(response.status_code, 200)
