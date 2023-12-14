from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Profile


class SignUpForm(UserCreationForm):
    class Meta:
        model = Profile
        fields = ('name', 'surname', 'username', 'mail', 'password1', 'code')
    