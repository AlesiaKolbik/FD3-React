import React from 'react';
import PropTypes from 'prop-types';
import mobileCompanyEvents from './eventsEmmiter.js';
// import './form.css';


export default class FormAddClient extends React.PureComponent{
    static propTypes={
        clientInfo:PropTypes.shape(
            {
                id:PropTypes.number.isRequired,
                fio:PropTypes.string,
                balance:PropTypes.number
            }
        )
    };

    constructor(){
        super();
        this.newName = null;
        this.newBalance = null;
    }
    fieldName = (ref) =>{
        this.newName = ref;
    };
    fieldBalance = (ref) =>{
        this.newBalance = ref;
    };
    handleSave = () => {
            let newClient = {};
            newClient.id = this.props.clientInfo.id;
            newClient.fio = this.newName.value;
            newClient.balance = parseInt(this.newBalance.value);
            mobileCompanyEvents.emit('ESaveNewClient', newClient);
    };
    render(){
        console.log('Form render');
        return(
            <div className={'FormAddClient'}>
            <form>
                id : {this.props.clientInfo.id}
                <label htmlFor='name'><span>Name</span>
                    <input id='name' type='text' defaultValue={this.props.clientInfo.fio} ref={this.fieldName}/>
                </label>
                <label htmlFor='balance'><span>Balance</span>
                    <input id='balance' type='number' defaultValue={this.props.clientInfo.balance} ref={this.fieldBalance}/>
                </label>
            </form>
            <input type='button' value='Save' onClick={this.handleSave}/>
            </div>
        )
    }
};