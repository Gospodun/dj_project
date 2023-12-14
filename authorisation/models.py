from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser


class Profile(AbstractUser):
    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    mail = models.EmailField(max_length=30)
    code =  models.CharField(max_length=5)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f'{self.name} {self.surname} Profile'