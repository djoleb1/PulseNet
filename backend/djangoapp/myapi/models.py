from django.db import models

# Create your models here.


class User(models.Model):

    username = models.CharField(max_length=50, unique=True, blank=False)
    first_name = models.CharField(max_length=50, blank=False)
    last_name = models.CharField(max_length=50, blank=False)
    email = models.EmailField(max_length=100, unique=True, blank=False)
    password = models.CharField(max_length=256)
    