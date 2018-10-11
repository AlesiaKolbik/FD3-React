import React from 'react';
import PropTypes from 'prop-types';


export default class Br2jsx extends React.Component{
    static propTypes={
    text:PropTypes.string.isRequired
    };
    componentWillMount(){
        let string = this.props.text;
        let arr = string.split('<br>');
        arr = arr.map((item,i)=>
            <span key={i}>{item}<br/></span>);
        this.setState({text:arr});
    }

    render(){
        return(
            <div>
                {this.state.text}
            </div>
        )
    }
}


