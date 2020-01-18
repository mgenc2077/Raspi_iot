# Raspi_Gpio (Genc_Iot)
Raspberry Pi üzerinde bulunan Gpio Portlarını internet/yerel ağ üzerinden kontrol etmek için Django Web framework üzerinde bir web app tasarladım.
## Tüm fonksiyonlar
* Led Kontrol
  * Herhangi bir pin veya Led kontrolü
* Ldr Kontol
  * Ldr ve 1 uf kapasitör kullanılarak yapılan RC devresinden ışık durumu kontrolü
* Dht Kontrol
  * DHT-11 sensörü kullanılarak ortamın sıcaklık ve nem kontrolü
* Serbest Kontrol
  * Bütün GPIO pinlerini tek ekranda serbest kontrol

---
## Not
Şu anki halinde Gpio ile erişim için gerekli RPi.GPIO kütüphanesi ve bazı fonksiyonlar için gerekli kod test amaçlı yorum satırı haline getirilmiştir.
Anlık çalışan fonksiyonlar:
* Led Kontrol

