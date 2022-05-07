
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a = 'hello world'
// let b = 'lorem ipsum'
// let c = 'javascript is cool'
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);



// - Перевести до великого регістру наступні стрінгові значення
//  'hello world'; 'lorem ipsum'; 'javascript is cool';
// let a = 'hello world'
// let b = 'lorem ipsum'
// let c = 'javascript is cool'
// console.log(a.toUpperCase())
// console.log(b.toUpperCase())
// console.log(c.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let a = 'HELLO WORLD'
// let b = 'LOREM IPSUM'
// let c = 'JAVA IS COOL'
// console.log(a.toLowerCase())
// console.log(b.toLowerCase())
// console.log(c.toLowerCase())

// let str = ' dirty string   '
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let split = str.split(' ')
// console.log(split);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let map = numbers.map(value => { return value + '';});
// console.log(map);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];;
// let ascending = nums.sort(function (a,b){return a -b});
// console.log(ascending)
//
// let descending = nums.sort(function (a,b){return b -a});
// console.log(descending)
//




// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// console.log(coursesAndDurationArray.sort((u1, u2) => (u2.monthDuration - u1.monthDuration)));
// let filter = coursesAndDurationArray.filter(function (user){
//  return user.monthDuration > 5;
// });
// console.log(filter);


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// let cards = [
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'heart', value: '7', color: 'red'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//     {cardSuit: 'diamond', value: '6', color: 'red'},
//     {cardSuit: 'diamond', value: '7', color: 'red'},
//     {cardSuit: 'diamond', value: '8', color: 'red'},
//     {cardSuit: 'diamond', value: '9', color: 'red'},
//     {cardSuit: 'diamond', value: '10', color: 'red'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//     {cardSuit: 'spade', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: '7', color: 'black'},
//     {cardSuit: 'spade', value: '8', color: 'black'},
//     {cardSuit: 'spade', value: '9', color: 'black'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {cardSuit: 'clubs', value: '6', color: 'black'},
//     {cardSuit: 'clubs', value: '7', color: 'black'},
//     {cardSuit: 'clubs', value: '8', color: 'black'},
//     {cardSuit: 'clubs', value: '9', color: 'black'},
//     {cardSuit: 'clubs', value: '10', color: 'black'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'},
//     {value: 'joker'},
//     {value: 'joker'}
// ]
//
// let res = cards.filter((obj) => {
//     if (obj.cardSuit === 'spade' && obj.value === 'ace') {
//         return obj
//     }
// })
// let res2 = cards.filter((obj) => {
//     if (obj.value == 6) {
//         return obj
//     }
// })
// let res3 = cards.filter((obj) => {
//     if (obj.color === 'red') {
//         return obj
//     }
// })
//
// let res4 = cards.filter((obj) => {
//     if (obj.cardSuit === 'diamond') {
//         return obj
//     }
// })
// let res5 = cards.filter((obj) => {
//     if (obj.value ==="9"|| obj.value ==="10" || obj.value ==='jack'||obj.value ==='queen'||obj.value === 'king'||obj.value === 'ace') {
//         return obj
//     }
// })
//
//
// console.log(...res)
// console.log(res2)
// console.log(res3)
// console.log(res4)
// console.log(res5)
//
//
//
//
//
//











