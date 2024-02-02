from django.shortcuts import render
from django.http import HttpResponse
from django.http import Http404
from django.template import loader
# Create your views here.

def index(request):
    try:
        template = loader.get_template(request, 'templates/index.html')
    except:
        return HttpResponse("<h1> Not From a Template </h1>")