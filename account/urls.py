from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.cabinet),
    path('', include("django.contrib.auth.urls"))
]
