// 1 //

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i +=1) {
    console.log(numbers[i]);
}
// 2 //

let soma = 0;
for (let z = 0; z < numbers.length; z+=1) {
    soma += numbers[z];
}
console.log(soma);
// 3 //


let media;
for (let z = 0; z < numbers.length; z+=1) {
media = ((soma += numbers[z]) / numbers.length);
}

console.log (media);

// 4 //

if (media > 20) {
    console.log ('Valor maior que 20');
} else {
    console.log ('Valor menor que 20');
}

// 5 //

let maior = numbers[0];
for ( let i=1; i<numbers.length; i+=1) {
    if(maior < numbers[i])
    maior = numbers[i];
}
console.log (maior);

// 6 // 


//let impar;
//for (let i = 0; i < numbers.length; i +=1)

// 7 // 

let menor = numbers[0];
for (let i=1; i<numbers.length; i+=1) {
    if (menor > numbers[i])
    menor = numbers[i];
}
console.log(menor);

// 8 //

// let array = [];

// for (let i=0; i<array.length; i+=1)

// 9 //