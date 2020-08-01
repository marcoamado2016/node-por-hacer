const fs=require('fs');
let listadoPorHacer=[];
const guardarDB=()=>{
let data=JSON.stringify(listadoPorHacer)    

fs.writeFile("db/data.json",data,(err)=>{
if(err){
throw new Error("No se pudo grabar",err);
}else{
 console.log("El archivo se creo exitosamente");   
}
});
}

const cargarDB=()=>{
 try {
    listadoPorHacer=require('../db/data.json');  
 } catch (error) {
    listadoPorHacer=[];
 }
     
}
const crear=(descripcion)=>{
    cargarDB();
    let porHacer={
     descripcion,
     completado:false    
     }

     listadoPorHacer.push(porHacer)
     guardarDB();
     return porHacer;
}

const getListado=()=>{
   cargarDB();
   return listadoPorHacer;
}
const actualizar=(descripcion,completado=true)=>{
  cargarDB();
  let index=listadoPorHacer.findIndex((data)=>data.descripcion===descripcion);//devuelve un -1, si no lo encontro
  if(index>=0){
   listadoPorHacer[index].completado=completado;
   guardarDB();
   return true;//La tarea se hizo
  }
  return false;//La tarea no se hizo
}
const borrar=(descripcion)=>{
cargarDB();
let nuevoListado=listadoPorHacer.filter(tarea=>tarea.descripcion!==descripcion);

if(nuevoListado.length===listadoPorHacer.length){
 return false

}else{
listadoPorHacer=nuevoListado;
guardarDB();
return true;   
}
}
module.exports={
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar        
   }