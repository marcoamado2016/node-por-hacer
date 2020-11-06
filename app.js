const argv=require('./config/yargs').argv;
const porHacer=require('./por-hacer/por-hacer');
const color=require('colors');
let  comando=argv._[0];

switch(comando){
  case 'crear':
    console.log('Crear por cambiar'.red);
    let tarea=porHacer.crear(argv.descripcion);
    console.log(tarea);
  break;
  case 'listar':
    let listado=porHacer.getListado();
    console.log('Lista todas las tareas por hacer'.red);
    for(let tarea of listado){
    console.log("============================================".green)
    console.log(tarea.descripcion);
    console.log("Estado: "+tarea.completado);
    console.log("============================================".green)
    }
  break;

  case 'actualizar':
    console.log('Actualizar una tarea por hacer');
    let actualizado=porHacer.actualizar(argv.descripcion,argv.completado)
    console.log(actualizado)
  break;
  case 'borrar':
    let borrar=porHacer.borrar(argv.descripcion);
    console.log(borrar);
  break;
  default:
       console.log('--Comando no reconocido--');
       console.log();

}

/*
1-crear un repositorio en github
2-crear en el proyecto el archivo README.md
### Aplicacion de comandos
Este es el ejercicio del curso

recuerden los paquetes de node js
````
npm install
````
3-crear el archivo que contiene lo que no quiero subir en github => .gitignore
4-inicializar el repositorio => git init
5-git status para ver los archivo que son candidatos a ser subidos.
6-git add. para agregar al area de stage
7-git status ver un cambio por que ahora los archivos estan en el area de stage
8-git commit -m "Primer confirmacion"
9 git remote add origin https://github.com/marcoamado2016/node-por-hacer.git
10-git push -u origin master => empujar el proyecto al repositorio
11-git tag -a v1.0.0 -m "Primera version"
12-git tag
13-git push --tags
*/