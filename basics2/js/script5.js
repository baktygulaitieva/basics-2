let cardNumber = prompt("Введите номер вашей карты!", "14 цифр");
let result = cardNumber.slice(10, 14);

document.write("Номер вашей карты:**********" + result);
