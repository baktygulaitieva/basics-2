let cardNumber = prompt("Введите номер вашей карты!");
number = cardNumber.replace(cardNumber.slice(0, -4),'**********');

alert('Номер вашей карты'+ number);
