from django.shortcuts import render
from rest_framework.views import APIView
from templates.models import Template
from templates.serializers import TemplateSerializer
from rest_framework.response import Response
from rest_framework import status
# Create your views here.
class TemplateListView(APIView):

    def get(self,request):
        templates= Template.objects.all()
        serializer= TemplateSerializer(templates, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
 
class TemplateDetailView(APIView):
    def get(self,request,pk):
        template= Template.objects.get(id=pk)
        serializer= TemplateSerializer(template)
        return Response(serializer.data, status=status.HTTP_200_OK)