const fs=require('fs');
const { resolve } = require('path');
const crearArchivo=async(base=5,listar=false, hasta=10)=>{
 //***************promesa******************
  
  try {
    let salida='';
    for(let i=1;i<=hasta;i++ ){
      salida +=`${base}x${i}=${base*i}\n`;
      }
    if (listar){ 
    console.log('=============');
    console.log(`tabla del:${base}`);
    console.log('=============');
    console.log(salida);
    }    
    fs.writeFileSync(`./salida/tabla- ${base}.txt`,salida)
    return (`tabla del:${base} creado` );
  } catch (error) {
    return error
  }
    
  }
module.exports={
  crearArchivo
}





