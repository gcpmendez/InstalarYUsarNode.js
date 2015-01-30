#**Instalación y uso de Node.JS**

<p align="center">
<img src="http://l4c.me/fullsize/nodejs-1331208992.png" title="Node.JS" width="400" height="250">
</p>

**Node** es un intérprete Javascript del lado del servidor que cambia la noción de cómo debería trabajar un servidor. Su meta es permitir a un programador construir aplicaciones altamente escalables y escribir código que maneje decenas de miles de conexiones simultáneas en una sólo una máquina física.

Tiene un "repositorio" de paquetes o frameworks que puedes utilizar mientras desarrollas. Se encuentran como Node Package Manager(NPM).

##**Instalación**
Pasamos a la **instalación** en los diferentes entornos:
* Linux
* En la Nube (Cloud 9 Ide)

###**Linux**

En Linux la forma de tener NodeJS es bajando el código fuente de la versión que más nos guste, compilarlo e instalarlo.

Para descargarlo se puede hacer de varias opciones, yendo a la página y descargando el node-v0.X.tar.gz, o podemos usar git haciendo un clone del source. Si quieren elejir y tirar un cURL (o descargar) una version en particular pueden verlo en [Distribuciones de Node.JS](http://nodejs.org/dist/)

Después de tener el tar.gz vamos a hacer los pasos de descomprimir, crear una carpeta, configurar el paquete, compilarlo e instalarlo:

Abrimos el terminal, nos posicionamos en el mismo directorio d el .tar.gz y hacemos lo siguiente:

```
$ tar -zxf node-v0.6.5.tar.gz
$ cd node-v0.6.5
$ ./configure
$ make
$ sudo make install
```

Comprobamos en la terminal que ya tenemos Node:

```
$ node -v
```
> Esto nos devuelve la versión de **Node** instalada

Ahora usemos Node para ejecutar algo de JavaScript:

```
$ node
> var prueba = 'Hola Node';
> console.log(prueba);
```
> Presionamos Ctrl+C dos veces y volvemos al terminal.

**Nota:** _Desde la version 0.6 de node ya tenemos el NPM incluido._

###**En la Nube (Cloud 9 Ide)**
Una forma interesante de usar nodejs es en la nube, no importa sobre que SO estemos, simplemente abrimos un explorador y arrancamos a escribir código.

Cloud9IDE es una buena opción para empezar con NodeJS evitando instalaciones y configuraciones, y hasta es un IDE, por lo que no necesitamos nada, sólo registrarnos en la página.

Trabaja con github para guardar los proyectos que realicemos por lo que es necesario tener una cuenta en gitub también, está todo muy bien explicado en el sitio.

##**Uso**
Ahora veremos un poco lo que es su **uso** con un primer programa: **'Hola Mundo!'**

* Crearemos el archivo **holamundo.js**
```
01 var http = require('http');
02 http.createServer(function(peticion, respuesta){
03    respuesta.writeHead(200, 'text/plain');
04    respuesta.end('Hola mundo.');
05 }).listen(3000, '127.0.0.1');
06 console.log('El servidor esta funcionando correctamente en http://localhost:3000/');
```
* Abrimos la consola de comandos y nos situamos en el directorio del archivo
```
$ cd C:\Program Files\nodejs\holamundo\
```
* Compilamos el archivo con el comando _node "NombreDeArchivo".js_
```
$ node holamundo.js
```
> Si todo ha salido bien la consola te responderá con el mensaje: 'El servidor esta funcionando correctamente en http://localhost:3000/'

* Finalmente solo nos queda probar que nuestro servidor esta funcionando correctamente, abrimos un navegador y escribimos [http://localhost:3000/] (http://localhost:3000/). Si ha salido todo bien nos aparecerá el mensaje **'Hola mundo!'**



##### Enlaces externos:
- [http://nodejs.org/](nodejs.org)
- [node.js - wikipedia](http://es.wikipedia.org/wiki/Nodejs)
- [Node.JS Fernando Gaitan](http://fernando-gaitan.com.ar/introduccion-a-node-js-parte-1-instalacion-hola-mundo/)
