from django.shortcuts import render
from .models import Task
from rest_framework import viewsets, permissions
from .serializers import TaskSerializer
# Create your views here.


class DayTrackerViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_class = [permissions.AllowAny]

