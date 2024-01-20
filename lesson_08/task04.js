'use strict';

// Необходимо написать функцию, которая принимает 2 параметра n и m
// И возвращает массив с високосными годами в диапазоне между n и m
// Алгоритм определения високосного года следует найти в интернете 
// самостоятельно или спросите у куратора
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

const getLeapYears = (n, m) => {
    const years = [];
    for (let i = n; i <= m; i++) {
        if (leapYear(i)) { years.push(i); }
    } return years;
}

const leapYear = (year) => {
    const inputYears4 = year % 4 === 0;
    const inputYears100 = year % 100 === 0;
    const inputYears400 = year % 400 === 0;
    return inputYears4 && !inputYears100 || inputYears400;

    // Вариант который выводит в консоль все года в диапазоне
    // и показывает високосный или нет год


    // if (
    //     year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
    // )
    //     console.log("Какой год:", year, "это високосный год");
    // else
    //     console.log(
    //         "Какой год:",
    //         year,
    //         "это не високосный год"
    //     );
}

console.log('Високосные года: ', getLeapYears(2014, 2024));