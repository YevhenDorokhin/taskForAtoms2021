import "../scss/style.scss";
import './table.js';

import { dataApi } from './data-api.js';
import { template } from './template.js';

class App {

    constructor() {};

    initialize() {
        dataApi.getData(res => {
            template.createTable(res);
        }, err => {
            console.error('Error:', err);
        });
    }
}

const app = new App();

app.initialize();

// Задание:
// Есть уже работающая версия страницы с таблицей, которую нужно переписать используя новую логику работы апи с сервера.
// Пример ответа апи в js.  
// Нужно использовать работу с объектами в js и четкой структурой и разбитием на логику js файлов.
// Не допускается вся логика в 1 файле. Код должен быть понятным и эффективным.
// Это таблица для 1 месяца с выводом по предметам и по дням с оценками.
// Нужно сделать первый блок с названием месяца как поп-ап списка (сам список никуда не ведет и никакого эвента на него не надо).
// У блоков предметов есть разбитие на цвета по предмету (у каждого свой).
// В цветных блоках оценки можно нажать и всплывает рядом небольшой попап (комментарий - см в ответе сервера)