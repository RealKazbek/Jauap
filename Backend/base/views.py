from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializers
from rest_framework.permissions import IsAuthenticated, AllowAny

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_notes(request):
  user = request.user
  notes = Note.objects.filter(owner=user)
  serializers = NoteSerializers(notes, many=True)
  return Response(serializers.data)
