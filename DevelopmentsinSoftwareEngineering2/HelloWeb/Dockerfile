# Base image olarak OpenJDK 11 kullanıyoruz
FROM openjdk:11-jdk

# GlassFish sunucusunun 7.0.11 sürümünü indiriyoruz
ENV GLASSFISH_VERSION 7.0.11
ENV GLASSFISH_HOME /glassfish

RUN wget -q -O glassfish.zip https://download.eclipse.org/ee4j/glassfish/glassfish-7.0.11.zip \
    && unzip -q glassfish.zip -d / \
    && mv /glassfish7 ${GLASSFISH_HOME} \
    && rm glassfish.zip

# Proje dosyalarını container'a kopyalıyoruz
COPY . /usr/src/app

# Proje dizinine gidiyoruz
WORKDIR /usr/src/app

# WAR dosyasını manuel olarak oluşturuyoruz
RUN jar cvf HelloWeb.war .

# Oluşturduğumuz WAR dosyasını GlassFish autodeploy dizinine kopyalıyoruz
RUN cp HelloWeb.war ${GLASSFISH_HOME}/glassfish/domains/domain1/autodeploy/

# GlassFish'in HTTP portunu açıyoruz
EXPOSE 8080 4848

# GlassFish sunucusunu başlatıyoruz
CMD ${GLASSFISH_HOME}/bin/asadmin start-domain --verbose
