//Archivo de la funcion para realizar la tabla de multiplicar 
const fs = require('fs'); //libreria perteneciente al mismo node
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, limite = 10) => { //funcion asincrona
    try{
        let salida = ''; //variable de string vacia en la que guardaremos la tabla
        let consola = ''; //variable de ayuda para mostrar datos en consola

        for(let i = 1; i <= limite; i++){ //funcion for que va de 1 al 10
            salida += `${base} x ${i} = ${base*i}\n`; //simple operacion de multiplicación
            consola += `   ${colors.brightCyan(base)} ${'x'.brightYellow} ${colors.brightCyan(i)} ${'='.brightYellow} ${colors.brightWhite(base*i)}\n`; //simple operacion de multiplicación
        }

        if(listar) { //condicional que permitira mostrar o no la tabla en consola
            console.log("=================".rainbow);
            console.log("==".rainbow, `Tabla del ${base}`.brightGreen ,"==".rainbow)
            console.log("=================".rainbow);
            
            console.log(consola);
        }

        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida); //creacion de archivo txt con la tabla de multiplicar

        return ` Archivo "Tabla-${base}.txt" creado con exito `.bgBlue.brightWhite;
        
    } catch(err) {
        throw(err)
    }
}

module.exports = {
    crearArchivo
}