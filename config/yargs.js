const argv=require('yargs')
            .option('b',{
                alias:'base',
                type:'number',
                demandOption:true
            })
            .option('l',{
                alias:'listar',
                type:'boolean',
                demandOption:true,
                default:false
               })
            .option('h',{
                alias:'hasta',
                type:'number',
                default:10
               })
            .check((argv,option)=>{
                if(isNaN(argv.b)){
                    throw 'la base debe ser un numero';
                }
                else if(isNaN(argv.h)){
                    throw'la base debe ser un numero';
                }
                return true
            })
            .argv;


module.exports=argv;