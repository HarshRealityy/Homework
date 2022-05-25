// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
document.getElementById('hider').onclick = function() {
    document.getElementById('text').hidden = true;
}
const div = document.createElement('div')
div.setAttribute('id','text')
div.innerText = 'Hello'

const button = document.createElement('button')
button.innerText = 'Click'

document.body.append(div,button)

button.onclick = (function () {
    div.style.display = 'none';

})



// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
function triggerOnclick(e) {
    const forms = Array.from(document.forms).map(form => new FormData(form));
    forms.forEach(form => {
        const data = Object.fromEntries(form.entries());
        Object.keys(data).forEach(key =>{
            console.log(`${key}: ${data[key]}`);
        })
    })
}


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const input = document.createElement('input');
input.type = 'number';

const button = document.createElement('button')
button.innerText = 'Click';

document.body.append(input, button);

button.addEventListener('click', function (){
    if (input.value >= 18){
        console.log('Hello')
    }else  {
        console.log('block')
    }
})
