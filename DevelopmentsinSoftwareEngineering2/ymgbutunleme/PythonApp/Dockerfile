# Python imajını kullan
FROM python:3.11-slim

# Çalışma dizinini oluştur ve ayarla
WORKDIR /app

# Gereken Python paketlerini yükle
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Flask uygulamasını kopyala
COPY app.py app.py

# Flask uygulamasını çalıştır
CMD ["python", "app.py"]
