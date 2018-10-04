import React from 'react';
import ReactDOM from 'react-dom';

import Catalogue from './components/Catalogue.js';


const products = [
    {
        id: 1234,
        productName: "Зонт пляжный",
        price: "30 руб.",
        count: 23,
        urlPictures: "https://nsk.rf-54.ru/upload/iblock/25d/204533.jpg"
    },
    {
        id: 1567,
        productName: "Набор для ныряния",
        price: "66 руб.",
        count: 20,
        urlPictures: "https://nsk.rf-54.ru/upload/iblock/eb8/109013.jpg"
    },
    {
        id: 189,
        productName: "Матрац надувной",
        price: "45 руб.",
        count: 3,
        urlPictures: "https://nsk.rf-54.ru/upload/iblock/89b/70524.jpg"
    },
    {
        id: 11112,
        productName: "Мяч надувной",
        price: "10 руб.",
        count: 10,
        urlPictures: "https://nsk.rf-54.ru/upload/iblock/303/20387.jpg"
    },
    {
        id: 11314,
        productName: "Бассейн детский",
        price: "30 руб.",
        count: 3,
        urlPictures: "https://nsk.rf-54.ru/upload/iblock/1c4/15887.jpg"
    },
    {
        id: 11516,
        productName: "Плот плавательный",
        price: "15 руб.",
        count: 5,
        urlPictures: "https://nsk.rf-54.ru/upload/iblock/669/198358.jpg"
    },
    {
        id: 11718,
        productName: "Плот надувной Апельсин",
        price: "17 руб.",
        count: 6,
        urlPictures: "https://nsk.rf-54.ru/upload/iblock/e7e/188125.jpg"
    },
    {
        id: 11920,
        productName: "Ласты для плавания",
        price: "33 руб.",
        count: 6,
        urlPictures: "https://nsk.rf-54.ru/upload/iblock/4c3/197981_4.jpg"
    },
    {
        id: 12122,
        productName: "Бассейн Гриб",
        price: "40 руб.",
        count: 8,
        urlPictures: "https://nsk.rf-54.ru/upload/iblock/041/155336.jpg"
    }
];

ReactDOM.render(
    React.createElement(Catalogue, {products: products}),
    document.getElementById('container')
);