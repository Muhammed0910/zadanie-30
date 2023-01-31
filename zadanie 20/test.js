1
//как называется функция 
function showMessage(параметры) {
    //код
}
// showMessage
2
//как называется функция 
let showMessage = function (параметры) {
    //код
}
// showMessage
3
//как называется функция 
let showMessage = (параметры) => {
    //код
}
// showMessage
4
//создайте функцию которая выводит в консоли текст 'Запуск' и вызовите функцию
function zapusk() {
    console.log('zapusk')
}
zapusk()
5
//создайте функцию которая в качестве пареметров принимает 'a' и 'b' и возвращает сумму полученных параметров
function aib1(a, b) {
    return a + b
}

6
//конвертируйте функцию ниже в функциональное вырожение
function sum(text = 'text', age = 24) {
    console.log(`${text} ${age}`)
}
sum()
7
//создайте функцию с помощoю конструктора которая в качестве параметра принимает 'a', 'b' и возвращает сумму полученных параметров 
let a = new Function('a', 'b', 'return a + b')
8
//можно ли вызвать функцию до ее обьявления?
// mojno
9
//создайте самовызывающуюся функцию которая выводит в консоли слово 'Запуск'
(function () {
    console.log('Zapusk');
})();
10
//что такое arguments в функциях?
function sum2(text, age) {
    console.log(arguments);
}

sum2('text', 24);
// это подобный массиву объект, который содержит аргументы, переданные в функцию
11
//выведите в консоли обьект с параметрами из функции
function sum3(text, age) {
    //код
}

console.log(sum3('text', 24))

12
//задайте параметру text значение 'some text' по умолчанию
function sum(text, age) {
    //код
}

sum('text', 24);

13
//вызовите функцию ниже
function sum(text, age, job) {
    //код
}

14
//вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью call()
const person1 = {
    firstFunc: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person2 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}

person1.firstFunc.call(person2)
15
//вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью apply()
const person3 = {
    firstFunc: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person4 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}

person3.firstFunc.apply(person4)
16
//какой из методов может принять массив параметров
call() // etot
apply()

17
//с помощью какого метода можно вывести максимально большое число из списка
//1, 2, 3
Math.max.apply(1, 2, 3)
18
//с помощью какого метода можно вывести максимально большое число из массива
//[1, 2, 4]
Math.max.apply([1, 2, 4])
19
//с помощью какого метода можно вывести самое маленькое число из списка
//1, 2, 3
Math.min.apply(1, 2, 3)
20
//с помощью какого метода можно вывести маленькое число из массива
//[1, 2, 4]
Math.min.apply([1, 2, 4])