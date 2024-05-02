console.clear();
const teclado = require(`prompt-sync`)();
const data = new Date;
let dia: number = data.getDate();
let mes: number = data.getMonth();
let ano: number = data.getFullYear();

function dataAtual(): void {
    let d: number = parseInt(teclado(`Digite o Dia: `));
    let m: number = parseInt(teclado(`Digite o Mês: `));
    let a: number = parseInt(teclado(`Digite o Ano: `));
    mes++
    if(dia == d && mes == m && ano == a){
        console.log(`Hoje é ${dia}/${mes++}/${ano}`);
    }
    else if(dia != d && mes == m && ano == a){
        console.log(`O dia é inválido`);
    }
    else if(dia == d && mes != m && ano == a){
        console.log(`O mês é inválido`);
    }
    else if(dia == d && mes == m && ano != a){
        console.log(`O ano é inválido`);
    }
    else if(dia != d && mes != m && ano == a){
        console.log(`O dia e o mes sâo invalidos`);
    }  
    else if(dia != d && mes == m && ano != a){
        console.log(`O dia e o ano são inválido`);
    }  
    else if(dia == d && mes != m && ano != a){
        console.log(`O mes e o ano são inválido`);
    }  
    else if(dia != d && mes != m && ano != a){
        console.log(`O dia, mes e ano são inválido`);
    }      
 
}

dataAtual();