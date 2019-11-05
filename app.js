const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const argv = require("./config/yargs").argv;
const colors = require("colors");
let command = argv._[0];
let base = argv.base;

switch (command) {
    case "listar":
        console.log("listar");
        listarTabla(base, argv.limite)
            .then(result => {
                console.log("::::::::::::::::::::::::::::::::::::::::::::::::".green);
                console.log(
                    `::::::::::::::::: TABLA DEL ${base} :::::::::::::::::`.green
                );
                console.log("::::::::::::::::::::::::::::::::::::::::::::::::".green);
                console.log(result);
            })
            .catch(err => console.log(err));
        break;
    case "crear":
        console.log("crea");
        crearArchivo(base, argv.limite)
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err));
        break;
    default:
        console.log("NA");
        break;
}
// console.log(argv.base);
// console.log(argv.limite);