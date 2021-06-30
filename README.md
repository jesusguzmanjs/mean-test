# MEAN Stack APP

Aplicación usando MEAN stack para visualizar datos en una tabla, donde se pueden crear, editar o importar desde un archivo CSV

# Docker

La manera mas facil de iniciar esta aplicacion es usando docker, para ello descarga Docker Desktop 
desde el siguiente link: https://hub.docker.com/editions/community/docker-ce-desktop-windows

Inicia el servicio de Docker iniciando Docker Desktop una vez instalado

Desde la ruta principal del proyecto realizar este comando 

`docker-compose pull`

Despues

`docker-compose up -d`

y navegar a la ruta `localhost:80`

#Sin Docker

Si se desea iniciar sin docker, seguir los siguientes pasos:

-Asegurarse de tener instalado Node en la ultima version estable

https://nodejs.org/en/

##Server

Tener instalado un servicio de mongo en la maquina apuntando al puerto 27017.

Se puede descargar la version community del servidor de mongo desde este enlace y seguir los pasos del instalador

https://www.mongodb.com/try/download/community?tck=docs_server

Lanzar el comando `npm install` desde la carpeta server para instalar las dependencias

Lanzar el comando `npm run start:develop` desde la carpeta server

## Client

Lanzar el comando `npm install` desde la carpeta client para instalar las dependencias

Para iniciar el cliente usar `npm run start` desde la carpeta client y navegar a la ruta `http://localhost:4200/`


