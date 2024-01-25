'use strict';

{
    const productName = 'Молоко';
    const productQuantity = 30;
    const productCategory = 'Продукты';
    const productPrice = 59;
    const totalAmount = (`обшая стоимость товара: ${productQuantity * productPrice}`);
    console.log(totalAmount);
}

{
    const productName1 = 'Тарелка';
    const productQuantity1 = 27;
    const productCategory1 = 'Посуда';
    const productPrice1 = 148;
    
    console.log(typeof productQuantity1);
    console.log(typeof productPrice1);
    console.log(`На складе ${productQuantity1} единиц товара "${productName1}" на сумму ${productQuantity1 * productPrice1} деревянных.`);
}

{
    const userItem = prompt("Укажите наименование товара");
    const userCount = prompt('Укажите количество товара');

    if (typeof productQuantity1 === 'number') {
        prompt('Укажите количество товара'); 
    } else {
        alert ("Вы ввели некорректные данные");
    }

    const userCategory = prompt('Укажите категорию товара');
    const userPrice = prompt('Укажите стоимость товара');

    if (typeof productPrice1 === 'number') {
        prompt('Укажите количество товара'); 
    } else {
        alert ("Вы ввели некорректные данные");
    }
    
    
}

