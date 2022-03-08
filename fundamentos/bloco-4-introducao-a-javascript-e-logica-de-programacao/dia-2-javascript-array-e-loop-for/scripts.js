let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i +=1) {
    console.log(numbers[i]);
}
// 1 //

let soma = 0;
for (let z = 0; z < numbers.length; z+=1) {
    soma += numbers[z];
}
console.log(soma);
// 2 //


let media;
for (let z = 0; z < numbers.length; z+=1) {
media = ((soma += numbers[z]) / numbers.length);
}

console.log (media);

