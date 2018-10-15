import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product.js';

import './catalogue.css';

let Catalogue = React.createClass({

    displayName: 'Catalogue',
    propTypes: {
        products: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                productName: React.PropTypes.string.isRequired,
                price: React.PropTypes.string.isRequired,
                count: React.PropTypes.number.isRequired,
                urlPictures: React.PropTypes.string.isRequired
            })
        ),
    },
    getInitialState: function () {
        return {
            products:this.props.products,
            selected:null
        };
    },
    deleteItemFromList: function(id){
        let productsList = this.state.products;
        productsList = productsList.filter(item => item.id !== id);
        this.setState({products:productsList});
    },
    selectProduct:function(id){
        this.setState({selected: id});
    },
    render: function () {
        let productBlocks = this.state.products.map(item =>
            React.createElement(Product, {key: item.id, src: item.urlPictures,
                productName: item.productName, price: item.price, count: item.count,id:item.id,
                buttonFunct:this.deleteItemFromList,select:this.selectProduct,selectedLine:this.state.selected
            }),
        );
        return React.DOM.div({className: 'Catalogue'},
            React.DOM.table({className: 'ProductsTable'},
                React.DOM.thead(null,
                    React.DOM.tr(null,
                        React.DOM.td(null,'Name'),
                        React.DOM.td(null, 'Price'),
                        React.DOM.td(null, 'URL'),
                        React.DOM.td(null, 'Quantity'),
                        React.DOM.td(null, 'Control'))),
                React.DOM.tbody(null,
            productBlocks)));
    },
});

export default Catalogue;