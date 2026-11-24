// 1
let password = 'пароль';
let confirmPassword = prompt('Введите пароль');
alert(password == confirmPassword? 'Пароль введен верно': 'Пароль введен неправильно');

// 2
let c = 0;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = 10;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = -3;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = 2;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// 3
let d = 1;
let e = 0;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

// 5
let monthNumber = 12;
switch (monthNumber) {
    case 1:
        console.log('Сейчас январь');
        break;
    case 2:
        console.log('Сейчас февраль');
        break;
    case 3:
        console.log('Сейчас март');
        break;
    case 4:
        console.log('Сейчас аперль');
        break;
    case 5:
        console.log('Сейчас май');
        break;
    case 6:
        console.log('Сейчас июнь');
        break;
    case 7:
        console.log('Сейчас июль');
        break;
    case 8:
        console.log('Сейчас август');
        break;
    case 9:
        console.log('Сейчас сентябрь');
        break;
    case 10:
        console.log('Сейчас октябрь');
        break;
    case 11:
        console.log('Сейчас ноябрь');
        break;
    case 12:
        console.log('Сейчас декабрь');
        break;
    default: 
        console.log('Такого месяца еще нет');
}