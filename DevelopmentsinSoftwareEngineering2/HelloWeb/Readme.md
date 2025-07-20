# Proje Kılavuzu

Bu proje, Docker container'ları kullanarak çalıştırılacak bir web uygulamasıdır. Projeyi NetBeans IDE ile Java JDK 11 kullanarak build ettikten sonra Docker ile çalıştırabilirsiniz.

## Gereksinimler

- **Java JDK 11**
- **NetBeans IDE**
- **Docker ve Docker Compose**

## Kurulum ve Çalıştırma

### 1. Projeyi Build Etme

1. NetBeans IDE'yi açın.
2. Projeyi açın veya oluşturun.
3. Projeyi Java JDK 11 ile build edin.

### 2. Docker Konfigürasyon Dosyalarını Hazırlama

1. Build işlemi tamamlandıktan sonra, `build/web` klasörüne gidin.
2. Aşağıdaki dosyaları `build/web` klasörüne kopyalayın:

   - `Dockerfile`
   - `docker-compose.yml`
   - `nginx.conf`

### 3. Docker Container'larını Başlatma

1. Komut istemcisini (cmd) açın.
2. Proje klasörüne gidin (`cd build/web`).
3. Aşağıdaki komutu çalıştırın:

   ```bash
   docker-compose up
4. http://localhost:8090/HelloWeb/ den web uygulaması hizmet vermektedir.