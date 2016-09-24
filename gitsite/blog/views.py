from django.shortcuts import render
from django.utils import timezone
from .models import Entry

# Create your views here.
def home_view(request):
    return render(request, 'index.html')

def about_view(request):
    return render(request, 'about.html')

def entry_list(request):
    entries = Entry.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'entry/entry_list.html', {'entries': entries})
