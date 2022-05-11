
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, creator, year, maxspeed, liters) {
//
//     this.model = model
//     this.creator = creator
//     this.year = year
//     this.maxspeed = maxspeed
//     this.liters = liters
//     this.info = function () {
//         for (element in this) {
//             if (typeof this[element] !== 'function') {
//                 console.log(`${element} - ${this[element]}`)
//             }
//         }
//     }
//
//
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
//
// let obj = new Car('Megane', 'France', '2003', 360, 2)
//
// console.log(obj);
// obj.info()
// obj.addDriver('adam')
// obj.info()
// const drive = () => {
//     let maxspeed = 200;
//
//     return `Їдемо зі швидкістю ${maxspeed} на годину`
// }
//
//
// console.log(drive());
// const increaseMaxSpeed = (newSpeed) => {
//     let maxspeed = 200;
//     if (newSpeed > maxspeed ) {
//         maxspeed = newSpeed;
//     }
//
//     return `Їдемо зі швидкістю ${maxspeed} на годину`
//
// }
// console.log(increaseMaxSpeed('360'));



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class carTwo {
//     constructor(model,creator,year,maxSpead,liters) {
//         this.model = model
//         this.creator = creator
//         this.year = year
//         this.maxSpead = maxSpead
//         this.liters = liters
//     }
//     info(){
//         for (let element in this){
//             console.log(element - `${this[element]}`)
//         }
//     }
// }
// let myCar = new carTwo('Megane', 'France', '2003', 360, 2)
// myCar.info()
//
// function Car(model, creator, year, maxspeed, liters) {
//
//     this.model = model
//     this.creator = creator
//     this.year = year
//     this.maxspeed = maxspeed
//     this.liters = liters
//     this.info = function () {
//         for (element in this) {
//             if (typeof this[element] !== 'function') {
//                 console.log(`${element} - ${this[element]}`)
//             }
//         }
//     }
//
//
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
//
// let obj = new Car('Megane', 'France', '2003', 360, 2)
//
// console.log(obj);
// obj.info()
// obj.addDriver('adam')
// obj.info()