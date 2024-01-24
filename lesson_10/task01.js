'use strict';

// Вам дан список ip-адресов -> IPv4
// задача: написать функцию, которая будет возвращать число равное
// количеству уникальных ip - адресов

// ==== Первый вариант ====

// function countUniqueIPs(listIPv4) {
//   const uniqueIPsSet = new Set();

//   for (const ip of listIPv4) {
//     uniqueIPsSet.add(ip);
//   }

//   return uniqueIPsSet.size;
// }

// const listIPv4 = [
//     "10.90.112.24",
//     "10.64.146.250",
//     "10.215.63.84",
//     "10.125.20.72",
//     "10.143.250.143",
//     "10.181.137.59",
//     "10.228.172.128",
//     "10.111.75.25",
//     "10.248.130.41",
//     "10.61.119.18",
//     "10.214.91.201",
//     "10.135.242.153",
//     "10.25.124.143",
//     "10.150.137.9",
//     "10.188.194.209",
//     "10.20.86.137",
//     "10.177.18.221",
//     "10.155.176.121",
//     "10.118.134.95",
//     "10.220.244.27",
//     "10.137.120.195",
//     "10.254.90.68",
//     "10.241.123.192",
// ];

// console.log(countUniqueIPs(listIPv4)); // 23 уникальных IPv4


// ==== Второй вариант ====

// Вы можете решить эту задачу, используя объект Set в JavaScript, чтобы
// хранить только уникальные элементы из списка ip - адресов.Затем вы
// можете вернуть размер этого объекта Set, чтобы получить количество
// уникальных ip - адресов. Вот пример реализации функции:

// Этот код создает новый объект Set, передавая в него список ip - адресов.
// Затем он возвращает размер объекта Set, который является количеством
// уникальных ip - адресов в списке.
// В консоли будет выведено значение 23, что является количеством уникальных
// ip - адресов в данном списке.

function countUniqueIPs(ipList) {
  const uniqueIPs = new Set(ipList);
  return uniqueIPs.size;
}

const listIPv4 = [
  "10.90.112.24",
  "10.64.146.250",
  "10.215.63.84",
  "10.125.20.72",
  "10.143.250.143",
  "10.181.137.59",
  "10.228.172.128",
  "10.111.75.25",
  "10.248.130.41",
  "10.61.119.18",
  "10.214.91.201",
  "10.135.242.153",
  "10.25.124.143",
  "10.150.137.9",
  "10.188.194.209",
  "10.20.86.137",
  "10.177.18.221",
  "10.155.176.121",
  "10.118.134.95",
  "10.220.244.27",
  "10.137.120.195",
  "10.254.90.68",
  "10.241.123.192",
];

const uniqueIPCount = countUniqueIPs(listIPv4);
console.log(uniqueIPCount);
