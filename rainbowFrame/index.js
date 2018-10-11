import React from 'react';
import ReactDOM from 'react-dom';
import RainbowFrame from './RainbowFrame.js';

let colors = ['red', 'blue', 'yellow', 'green', 'grey'];

ReactDOM.render(
    <RainbowFrame colors={colors}>
        <h3 style={{textAlign:"center"}}>Hello,world!</h3>
    </RainbowFrame>,
    document.getElementById('container')
);