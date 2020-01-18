from django.shortcuts import render
from django.http import JsonResponse
#import RPi.GPIO as GPIO
import time
from .models import Pin

#GPIO.setmode(GPIO.BOARD)
#GPIO.setup(11,GPIO.OUT)
#GPIO.setwarnings(False)

def index(request):
    return render(request, 'led/index.html')

def led(request):
    return render(request,"led/LED.html")

def ldr(request):
    return render(request,"led/LDR.html")

def dht(request):
    return render(request,"led/DHT.html")

def led_on(request):
    ledpin = request.GET.get('pin')
    #GPIO.output(ledpin,GPIO.HIGH)
    print('Ledpin {} acildi'.format(ledpin))
    data = {
        'sonuc': 'Led Acildi.'
    }
    return JsonResponse(data)

def led_off(request):
    ledpin1 = request.GET.get('pin')
    #GPIO.output(ledpin1,GPIO.LOW)
    print('Ledpin {} kapandi'.format(ledpin1))
    data = {
        'sonuc': 'Led Kapandi.'
    }
    return JsonResponse(data)

def serbest(request):
    context = {
        "pins": Pin.objects.all()
    }
    return render(request,"led/serbest.html",context)

def temizle(request):
    for i in range(1,26):
        #GPIO.output(i,GPIO.LOW)
        print('Ledpin {} kapandi'.format(i))
    data = {
        'sonuc': 'Ledlerin hepsi kapali.'
    }
    return JsonResponse(data)

def full_on(request):
    for i in range(1,26):
        #GPIO.output(i,GPIO.HIGH)
        print('Ledpin {} acildi'.format(i))
    data5 = {
        'sonuc': 'Ledlerin hepsi acik.'
    }
    return JsonResponse(data5)

def hafiza(request):
    data1 =  {
        "pins": Pin.objects.all().values
    }
    print(data1)
    return JsonResponse(data1)