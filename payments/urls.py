from django.urls import path
from payments.views import view_new_payments, approve_payment, view_payments, view_invoice, create_payment_request, \
    view_requested_payment, main_page

urlpatterns = [
    path("view/new", view_new_payments),
    path("view/request", view_requested_payment, name='view_requested_payment'),
    path("view", view_payments),
    path("invoice/<int:payment_id>", view_invoice),
    path("create", create_payment_request, name='create_payment_request'),
    path("approve/<int:payment_id>", approve_payment, name='approve_payment'),
    path("main", main_page, name='main_page'),
]
