import React from 'react';
import PropTypes from 'prop-types';


export default class Br2jsx extends React.Component{
    static propTypes={
    text:PropTypes.string.isRequired
    };

    render(){
        let string = this.props.text;
        let arr = string.split('<br>');
        let text = [];
        arr.forEach((item,i) => {
            if(i)text.push(<br/>);
            text.push(item);
        });
        return(
            <div>
                {text}
            </div>
        )
    }
}


