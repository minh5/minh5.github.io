from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.home_view, name='home'),
    url(r'^about', views.about_view, name='about'),
    url(r'^entry/', views.entry_list, name='entry_list')
]
