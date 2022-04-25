// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a,b) {
//     let res = a * b;
//     return res;
// }
// console.log(square(4,5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function square(p,r) {
//     let res = p * Math.pow(r, 2);
//     return res;
// }
// console.log(square(4,5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function square(p,r,h) {
//     let res = 2 * p * r * (h + r);
//     return res;
// }
// console.log(square(4,5,6))
 // - створити функцію яка приймає масив та виводить кожен його елемент

// function iterator(array){
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// let nums = [3,4,5,6,7];
// iterator(nums);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function foo(text) {
//     let a = document.write(`<p>${text}</p>`)
//     return text;
// }
// console.log(foo('lorem ipsum hello'));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(text) {
//     for (let i = 0; i < 3; i++) {
//         document.write(`<ul><li>${text}</li></ul>`);
//     }
//     return text;
// }
// console.log(foo('lorem'));
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function foo(text,length) {
//     for (let i = 0; i < length; i++) {
//         document.write(`<ul><li>${text}</li></ul>`);
//     }
//     return text;
// }
// console.log(foo('lorem', 10));

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function iterator(array){
//     for (const arrayElement of array) {
//         document.write(`<ul><li>${arrayElement}</li></ul>`)
//     }
// }
// let nums = [3,4,5,6,7];
// iterator(nums);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function iterator(array){
//     for (let arrayElement of array) {
//         document.write(`<div>${arrayElement.name}</div>`)
//         document.write(`<div>${arrayElement.age}</div>`)
//         document.write(`<div>${arrayElement.id}</div>`)
//     }
// }
// let nums = [{name: 'Vova', age: '14',id: 1},
//             {name: 'Matviy', age: '13', id: 2}];
// iterator(nums);

// - створити функцію яка повертає найменьше число з масиву
// function foo(array){
//     let min = array[0];
//     for (const funMinElement of array) {
//         if (funMinElement < min) min = funMinElement;
//     }
//     return min;
// }
// const funMixReturn = foo([2,3,4,5,6]);
// console.log(funMixReturn);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function calculate(array){
//     let i = 0;
//     for (const arrayElement of array) {
//         i += arrayElement;
//     }
//     return i;
// }
//
// const sume = calculate([4,2,3,4])
// console.log(sume);



















