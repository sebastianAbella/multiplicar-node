let fs = require("fs");
const colors = require("colors");
let data = "";
let listarTabla = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("la base o limite a LISTAR no es un numérica".red);
            return;
        }
        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`; // alt 92
        }
        resolve(data);
    });
};

let crearArchivo = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("la base no es un numerica".red);
            return;
        }
        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`; // alt 92
        }

        fs.writeFile(`tablas/tabla-${base}`, data, err => {
            if (err) reject(err);
            else
                resolve(`Archivo creado: ${colors.rainbow("tabla-" + base + ".txt")}`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};