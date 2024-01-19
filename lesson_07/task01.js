'use strict';

// Напишите функцию filter()
// функция принимает в параметрах 2 массива
// Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.
// Результат функции: массив из всех студентов, которые сдали экзамен.

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (allStudents, failedStudents) => { 
   const passedStudents = allStudents.filter((student) => failedStudents.indexOf(student) === -1);
   
   return passedStudents; 
}

console.log(filter(allStudents, failedStudents)); // Output: [‘Иванов’, ‘Петров’, ‘Кузнецов’, ‘Соколов’]