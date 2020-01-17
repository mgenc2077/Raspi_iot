from django.db import models

# Create your models here.
class Pin(models.Model):
    pin_numarasi = models.IntegerField()
    pin_degeri = models.BooleanField()

    def __str__(self):
        return f"{self.id} - {self.pin_numarasi} numarali pin {self.pin_degeri}"