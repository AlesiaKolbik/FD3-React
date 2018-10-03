import React from 'react';
import ReactDOM from 'react-dom';

import ListWords from './components/list.js';

const Words = [
    'частнопредпринимательский',
    'переосвидетельствоваться',
    'одиннадцатиклассница',
    'высокопревосходительство',
    'делопроизводительница',
    'герольдство',
    'контрстратегия',
    'бургомистрство',
    'субстанционизироваться'
];

ReactDOM.render(
    React.createElement(ListWords,{words:Words}),
    document.getElementById('container')
);



