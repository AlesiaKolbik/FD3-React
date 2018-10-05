import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product.js';

import './catalogue.css';

class Catalogue extends React.Component{

    static propTypes = {
        products: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                productName: PropTypes.string.isRequired,
                price: PropTypes.string.isRequired,
                count: PropTypes.number.isRequired,
                urlPictures: PropTypes.string.isRequired
            })
        ),
    };

    constructor(props){
        super(props);
        this.props = props;
};
    state = {
            products:this.props.products,
            selected:null
        };

    deleteItemFromlist = (id) => {
        let productsList = this.state.products;
        productsList = productsList.filter(item => item.id != id);
        this.setState({products:productsList})
    };
    selectProduct = (id) =>{
        this.setState({selected: id});
        console.log('selected');
    };
    render() {
        let productBlocks = this.state.products.map(item =>
            <Product key = {item.id} src ={item.urlPictures}
                productName = {item.productName} price={item.price} count={item.count} id={item.id}
                buttonFunct={this.deleteItemFromlist} select={this.selectProduct} selectedLine={this.state.selected}
            />
        );
        return (<div className="Catalogue">
            <table className = "ProductsTable">
            <thead>
            <tr>
                <td>Name</td>
                <td>Price</td>
                <td>URL</td>
                <td>Quantity</td>
                <td>Control</td>
            </tr>
            </thead>
                <tbody>
                {productBlocks}
                </tbody>
            </table>
            </div>)

    };
}

export default Catalogue;