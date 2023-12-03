from django.db import models
from django.contrib.auth.models import User, Group
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=50)
    notes = ArrayField(models.CharField(max_length=200))
    timestart = models.CharField(max_length=7)
    timeend = models.CharField(max_length=7)
