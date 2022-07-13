/*let numberOne;

numberOne = 1;

console.log(numberOne + 2);*/

/*var firstName = 'josias';
var lastName = 'kaio'

if(firstName === 'josias') {
    var firstName = 'moura';
    let lastName = 'silvia';
}
 
console.log(firstName, lastName)*/

/*const FIRST_NAME = 'josias';

const FIRST_NAME = 'moura'*/

//solução 1
function verificarPalindromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificarPalindromo("ovo"))


//solução 2
function verificarPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length -1 -i]) {
            return false;
        }
    }

    return true;
}

console.log(verificarPalindromo2("gato"));