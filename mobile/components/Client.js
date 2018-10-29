import React from 'react';
import PropTypes from 'prop-types';
import mobileCompanyEvents from './eventsEmmiter.js';
import './client.css';


export default class Client extends React.PureComponent{
    static propTypes = {
        info:PropTypes.shape({
            id: PropTypes.number.isRequired,
            fio: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
        }),
    };
    handleEdit = () =>{
       mobileCompanyEvents.emit('EAddNewClient', this.props.info.id);
    };
    handleDelete = () =>{
        mobileCompanyEvents.emit('EDeleteClient', this.props.info.id);
    };
    render(){
        console.log("Client "+this.props.info.id+" render");
        return(
            <tr className='Client'>
                <td>{this.props.info.fio}</td>
                <td>{this.props.info.balance}</td>
                <td><input type='button' value='edit' onClick={this.handleEdit}/></td>
                <td><input type='button' value='delete' onClick={this.handleDelete}/></td>
            </tr>
        )
    }
}