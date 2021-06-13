'use strict'

// Используя только файл скрипта  выполнить такие действия:
// Восстановить порядок книг.
// Заменить картинку заднего фона на другую из папки image
// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
// Удалить рекламу со страницы
// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место


const booksCollection = document.querySelectorAll('.books'),
    books = document.querySelectorAll('.book'),
    adv = document.querySelector('.adv');
console.log(booksCollection);



booksCollection[0].append(books[1]);
booksCollection[0].append(books[0]);
booksCollection[0].append(books[4]);
booksCollection[0].append(books[3]);
booksCollection[0].append(books[5]);
booksCollection[0].append(books[2]);

books[4].querySelector('h2 > a').textContent = 'Книга 3. this и ПроTотипы Объектов';


adv.remove();

let book2 = books[0].querySelectorAll('ul > li');

book2[10].prepend(book2[2]);
book2[10].prepend(book2[9]);
book2[10].prepend(book2[7]);
book2[10].prepend(book2[5]);
book2[10].prepend(book2[4]);
book2[10].prepend(book2[8]);
book2[10].prepend(book2[6]);
book2[10].prepend(book2[3]);
book2[10].prepend(book2[1]);
book2[10].prepend(book2[0]);


let book5 = books[5].querySelectorAll('ul > li');

// редисловие
// Глава 1: Асинхронность: Сейчас и Тогда
// Глава 2: Колбеки
// Глава 3: Обещания
// Глава 4: Генераторы
// Глава 5: Производительность программы
// Глава 6: Бенчмаркинг и настройка
// Приложение A: Библиотека: asynquence
// Приложение B: Расширенные асинхронные шаблоны
// Приложение C: Благодарности!
book5[1].after(book5[9]);
book5[9].after(book5[3]);
book5[3].after(book5[4]);
book5[2].after(book5[6]);
book5[6].after(book5[7]);

//Глава 8: За пределами ES6

let book6 = books[2].querySelectorAll('ul > li');
 let elem = document.createElement('li');
 elem.textContent = "Глава 8: За пределами ES6";
book6[8].append(elem);



