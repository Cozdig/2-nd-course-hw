// 1
let i = 0;
while (i < 2) {
    console.log('Привет');
    i++;
}

// 2
let num = 1;
while (num <= 5) {
    console.log(num);
    num++;
}

// 3
let numbers = 7;
while (numbers <= 22) {
    console.log(numbers);
    numbers++;
}

// 4
const obj = {
    'Коля' : '200',
    'Вася' : '300',
    'Петя' : '400'
}

for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов.`);
}

// 5
let n = 1000;
let iteration = 0;

while (n > 50) {
    iteration++;
    n = n / 2;
}
console.log(`${iteration} раз прошла итерация`);
console.log(`получилось число ${n}`);

// 6
let input = prompt('Какое число выпадает на пятницу?')
while (input > 7 || input < 1) {
    input = prompt('Введите корректное число от 1 до 7')
}

let friday = Number(input)

for(let day = friday; day <= 31; day += 7) {
    alert(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

