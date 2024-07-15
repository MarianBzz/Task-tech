# Establece la imagen base
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de la aplicación al contenedor
COPY package.json package-lock.json /app/

# Instala las dependencias utilizando npm
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . /app/

# Compila la aplicación 
RUN npm run build

# Expone el puerto en el que el servicio se ejecutará dentro del contenedor
EXPOSE 3000

# Comando para ejecutar el servicio cuando se inicie el contenedor
CMD ["npm", "start"]
