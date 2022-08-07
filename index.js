const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(chalk.green(texto));
    } catch(erro) {
        trataErro(erro);
    }
}

    // 1 metodo da aula
    // const encoding = 'utf-8';
    // fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
    //     if(erro) {
    //         trataErro(erro);
    //     }
    //     console.log(chalk.green(texto))
    // })

    // 2 metodo da aula
    // const encoding = 'utf-8';
    // fs.promises
    // .readFile(caminhoDoArquivo, encoding)
    // .then((texto) => console.log(chalk.green(texto)))
    // .catch((erro) => trataErro(erro))



pegaArquivo('./arquivos/texto1.md');