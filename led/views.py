from django.shortcuts import render
from django.http import JsonResponse
#import RPi.GPIO as GPIO
import time
import json
from .models import Pin

#GPIO.setmode(GPIO.BOARD)
#GPIO.setup(11,GPIO.OUT)
#GPIO.setwarnings(False)

def index(request):
    return render(request, 'led/index.html')

def led(request):
    return render(request,"led/LED.html")

def ldr(request):
    #ldrpin = json.loads(request.body.decode())
    #ldrv1 = 0
    #GPIO.setmode(GPIO.BOARD)
    #GPIO.setup(ldrpin,GPIO.OUT)
    #GPIO.output(ldrpin,GPIO.LOW)
    #time.sleep(.1)
    #GPIO.setup(ldrpin,GPIO.IN)
    #while(GPIO.input(ldrpin)==GPIO.LOW):
    #   ilk += 1
    context1 = {
        'deger': '255'
    }
    return render(request,"led/LDR.html",context1)

def led_on(request):
    ledpin = json.loads(request.body.decode())
    #GPIO.setmode(GPIO.BOARD)
    #print(list(ledpin.values())[0])
    ledpin1 = list(ledpin.values())[0]
    #GPIO.output(ledpin,GPIO.HIGH)
    Pin.objects.filter(pin_numarasi=ledpin1).update(pin_degeri=True)
    print('Ledpin {} acildi'.format(ledpin1))
    data = {
        'sonuc': 'Led Acildi.'
    }
    return JsonResponse(data)

def led_off(request):
    ledpin3 = json.loads(request.body.decode())
    ledpin6 = list(ledpin3.values())[0]
    #GPIO.setmode(GPIO.BOARD)
    #GPIO.output(ledpin1,GPIO.LOW)
    Pin.objects.filter(pin_numarasi=ledpin6).update(pin_degeri=False)
    print('Ledpin {} kapandi'.format(ledpin6))
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
    #GPIO.setmode(GPIO.BOARD)
    for i in range(1,26):
        #GPIO.output(i,GPIO.LOW)
        print('Ledpin {} kapandi'.format(i))
    Pin.objects.all().update(pin_degeri=False)
    data = {
        'sonuc': 'Ledlerin hepsi kapali.'
    }
    return JsonResponse(data)

def full_on(request):
    #GPIO.setmode(GPIO.BOARD)
    for i in range(1,26):
        #GPIO.output(i,GPIO.HIGH)
        print('Ledpin {} acildi'.format(i))
    Pin.objects.all().update(pin_degeri=True)
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