import React from 'react';
import PropTypes from 'prop-types';
import './product.css';

class Product extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    static propTypes={
        src: PropTypes.string.isRequired,
        productName: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        buttonFunct: PropTypes.func.isRequired,
        select: PropTypes.func.isRequired,
        selectedLine:PropTypes.number
    };
    clickDelete = (e) =>{
        if(e.target === e.currentTarget) {
            let id = e.target.getAttribute('data');
            this.props.buttonFunct(id);
        }
    };
    clickEdit = (e) =>{
        if(e.target === e.currentTarget) {
            let id = e.target.getAttribute('data');
            /*this.props.buttonFunct(id);*/
            console.log(id);
        }
    };
    clickOnLine = (e)=>{
        console.log(e.target);
        console.log(e.currentTarget);
        if(e.target !== e.currentTarget) {
            console.log(e.target !== e.currentTarget);
            this.props.select(e.currentTarget.id);
        }
    };
     render() {
         return (<tr className={(this.props.selectedLine === this.props.id)
                 ?'selected' :null} id = {this.props.id} onClick={this.clickOnLine}>
                    <td>{this.props.productName}</td>
                    <td>{this.props.price}</td>
                    <td>{this.props.src}</td>
                    <td>{this.props.count}</td>
                    <td><input type='button' onClick={this.clickEdit} value='Edit' data-id ={this.props.id}/></td>
                    <td><input type='button' onClick={this.clickDelete} value='Delete' data-id ={this.props.id}/></td>
                </tr>
         )
     };

}
export default Product;