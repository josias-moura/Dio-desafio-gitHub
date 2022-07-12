// o que são vetores ou array

// como declarae um array
/*let array = ['string', 1, true];
console.log(array);*/

// pode quardar variaos tipos de dados
/*let array = ['string', 1, true, ['array1'], ['array2'], ['array3']]
console.log(array);

// forEach
array.forEach(function(item, index){console.log(item, index)});

array.push('novo item');
console.log(array)

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift();
console.log(array);

array.splice(0, 3);
console.log(array);

let novoArray = array.slice(0, 3);
console.log(novoArray)*/

let object = { String: 'atring', number: 1, boolean: true, array: ['array'], objectInterno:{objectInterno: 'objeto interno'}};

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);


