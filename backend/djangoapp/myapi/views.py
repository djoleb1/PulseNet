from django.shortcuts import render, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer

# Create your views here.
@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User created successfully."}, status=201)
        else:
            return Response(serializer.errors, status=400)

