import React from 'react';
import ReactDOM from 'react-dom';
import './list.css';


let ListWords = React.createClass({
    displayName: "ListWords",
    propTypes: {
        words:React.PropTypes.arrayOf(
            React.PropTypes.string
        )
    },
    getInitialState: function() {
        return {
            words: this.props.words,
            filter: false,
            sort: null
        }
    },
    clickFilterList:function(e){
        console.log(e.target.value);
        this.setState({filter: e.target.value}, this.sortList);
    },
    clickSortList:function(e){

        this.setState({sort: e.target.checked}, this.sortList);
    },
    sortList:function(){
        let words = this.props.words.slice();
        console.log(words);
        if(this.state.filter){
            words = words.filter(word => word.indexOf(this.state.filter) > 0);
        }
        if(this.state.sort){
            words.sort();
        }
        console.log(words);
        this.setState({words:words});
    },
    render:function () {
        let listItems = this.state.words.map (item =>
            React.DOM.option({key:item}, item)
        );

        return React.DOM.div({className: 'ListWords'},
            React.DOM.input({type: 'checkbox', defaultChecked: false, onClick: this.clickSortList}),
            React.DOM.input({type: 'text', onChange: this.clickFilterList}),
            React.DOM.select({className:'list', size:'5',multiple:null},listItems)
        )
    }
});

export default ListWords;