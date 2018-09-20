let Catalogue = React.createClass({

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
    displayName: 'Catalogue',

    render: function () {
        let productBlocks = this.props.products.map(item =>

            React.DOM.div({key: item.id, className: 'productBlock'},
                React.DOM.img({src: item.urlPictures}),
                React.DOM.h1({className: 'productTitle'}, item.productName),
                React.DOM.h2({className: 'productPrice'}, 'Цена: ' + item.price),
                React.DOM.p(null, 'На складе: ' + item.count),
            )
        );
        return React.DOM.div({className: 'Catalogue'}, productBlocks);
    },
});