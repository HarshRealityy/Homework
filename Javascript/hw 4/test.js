// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a,b,action) {
//     switch (action) {
//         case '*':
//             return a * b;
//         break;
//     }
// }
// let square1 = square(+prompt('a'), +prompt('b'), prompt('action'));
// alert(square1);

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
// let foo = (text) => {
//     let a = document.write(`<p>${text}</p>`)
//     return text;
// }
// console.log(foo('lorem ipsum hello'));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(text) {
//     document.write('<ul>')
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>')
//     return text;
// }
// console.log(foo('lorem'));
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function foo(text,length) {
//     document.write('<ul>')
//     for (let i = 0; i < length; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>')
//     return text;
// }
// console.log(foo('lorem', 10));
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function iterator(array){
//     document.write('<ul>')
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write('</ul>')
// }
// let nums = [3,'lorem',true];
// iterator(nums);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function iterator(array){
//     for (let arrayElement of array) {
//         document.write(`<div style="background:red; margin: 10px;">${arrayElement.name}${' '}${arrayElement.age}${' '}${arrayElement.id}</div>`)
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
// console.log(foo([6,3,4,5,6]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function calculate(array){
//     let i = 0;
//     for (const arrayElement of array) {
//         i += arrayElement;
//     }
//     return i;
// }
//
// console.log(calculate([3,4,5]))














