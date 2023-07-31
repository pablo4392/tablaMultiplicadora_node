// archivo de configuracion de yargs

const argv = require('yargs')
    .option('b', { //esta configuracion nos permitira recibir el argumento de la base para realizar la operacio correspondiente 
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar solicitada'
    })
    .option('l', { //esta configuracion nos da la opcion de listar o no las operaciones en la consola
        alias: 'listar',
        type:'boolean',
        default: false,
        describe: 'Mostrara la tabla en sonsola'
    })
    .option('h', {
        alias: 'limite',
        type: 'number',
        default: 10,
        describe: 'Limite al que se desee obtener la multiplicacion de la tabla'
    })
    .check((argv, options) => { //este chequeo se realiza para revisar que el argumento de "b" sea un numero
        if( isNaN(argv.b) ){
            throw 'La base debe ser un número'
        }
        return true
    })
    .argv;

module.exports = argv; //exportamos el modulo de yargs