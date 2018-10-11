import React from 'react';
import ReactDOM from 'react-dom';
import Br2jsx from './Br2jsx.js';


let text = 'До чего хорош денек!<br> Веет легкий ветерок<br>Солнца летнего лучи<br>Так приятно горячи!';

ReactDOM.render(
    <Br2jsx text={text}/>,
    document.getElementById('container')
);