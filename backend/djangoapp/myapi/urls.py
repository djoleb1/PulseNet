from django.urls import path
from . import views

app_name = "myapi"
urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('register/', views.register, name='register')
]