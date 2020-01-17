from django.urls import path
from . import views

urlpatterns = [
    path("", views.index,name='index'),
    path("led", views.led,name='led'),
    path("ldr", views.ldr,name='ldr'),
    path("dht", views.dht,name='dht'),
    path("led_on", views.led_on,name='led_on'),
    path("led_off", views.led_off,name='led_off'),
    path("serbest", views.serbest,name='serbest'),
]

