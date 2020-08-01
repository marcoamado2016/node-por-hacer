const descripcion={
  demand:true,
  alias:'d',
  desc:'descricpion de la tarea por hacer'
};
const completado={
  default:true,
  alias:'c',
  desc:'Marca como compleado o pendiente la tarea'  
}
const argv=require('yargs')
.command('crear','Crea una elemto por hacer',{descripcion})
.command('actualizar','actualiza el estado de completado',
{
    descripcion,completado
})
.command('borrar','borra una tarea',
{
  descripcion
})
.help()
.argv;
module.exports={
 argv
}