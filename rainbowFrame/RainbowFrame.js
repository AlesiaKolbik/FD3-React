import React from 'react';
import PropTypes from 'prop-types';

import './rainbowFrame.css';

export default class RainbowFrame extends React.Component{
    static propTypes={
        colors:PropTypes.arrayOf(
            PropTypes.string.isRequired
        )
    };
    state={
    };
    componentWillMount(){
        let arr = this.props.colors.slice();
        if(arr.length >= 1){
            let color = arr.shift();
            console.log(color);
            this.setState({colors:arr,colorFrame:color})
        }
    };
    render(){
        return(
            <div className ='frame' style={{border:'solid 5px '+this.state.colorFrame,padding:"5px"}}>
                {(this.props.colors.length > 1)?
                    <RainbowFrame colors={this.state.colors}>
                        {this.props.children}
                    </RainbowFrame>
                :this.props.children
                }
            </div>

        )
    }
}