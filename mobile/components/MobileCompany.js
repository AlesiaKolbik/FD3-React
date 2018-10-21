import React from 'react';
import PropTypes from 'prop-types';
import Client from './Client.js';
import equal from 'deep-equal';
import mobileCompanyEvents from './eventsEmmiter.js';
import FormAddClient from './FormAddClient.js';
import './mobileCompany.css';
export default class MobileCompany extends React.PureComponent{
    // constructor(){
    //     super();
    // };
    static propTypes = {
        name:PropTypes.string.isRequired,
        clients:PropTypes.arrayOf(
            PropTypes.shape(
                {
                    id:PropTypes.number.isRequired,
                    fio:PropTypes.string.isRequired,
                    balance:PropTypes.number.isRequired
                }
            )
        )
    };
    state = {
        clientsList:this.props.clients,
        editBlock:false,
        editInfo:{id:0,fio:'',balance:0},
        filter:'all'
    };
    handleAddNewClient = () =>{
        mobileCompanyEvents.emit('EAddNewClient');
    };
    addNewClient = (id)=> {
        if(!id){
            let changeInfo = {...this.state.editInfo};
            id = Date.now();
            changeInfo.id = id;
            changeInfo.fio = '';
            changeInfo.balance = 0;
            this.setState({editBlock: true, editInfo: changeInfo});
        }
        else{
            let info = this.state.clientsList.find(item=>{
                return item.id === id
            });
            let newInfo ={...info};
            if(newInfo.id !== this.state.editInfo.id){
                this.setState({editBlock: true, editInfo:newInfo});
            }
        }
    };
    deleteClient = (id)=> {
        let changedState = this.state.clientsList.filter(item => {
            return item.id !== id
        });
        this.setState({clientsList:changedState})
    };
    updateClientsList = (newClient) =>{
        let clientsListCopy = this.createNewClientsList(newClient);
       if(clientsListCopy) {
           this.setState({clientsList: clientsListCopy, editBlock: false, editInfo: {id: 0, fio: '', balance: 0}});
       }
       else{
           this.setState({editBlock: false, editInfo: {id: 0, fio: '', balance: 0}})
       }
    };
    createNewClientsList = (newClient) =>{
        let clients = [...this.state.clientsList];
        let change = false;
        clients.forEach((item,i)=> {
            if (item.id === newClient.id) {
                if(!equal(item, newClient)){
                    clients[i] = newClient;
                }
                else{
                    clients = null;
                }
                change = true;
            }
        });
        if(!change){
            clients.push(newClient);
        }
        return clients;
    };
    componentDidMount(){
        mobileCompanyEvents.addListener('EAddNewClient', this.addNewClient);
        mobileCompanyEvents.addListener('EDeleteClient', this.deleteClient);
        mobileCompanyEvents.addListener('ESaveNewClient', this.updateClientsList);
        mobileCompanyEvents.addListener('EFilterActive', this.filterActive);
        mobileCompanyEvents.addListener('EFilterBlocked', this.filterBlocked);
        mobileCompanyEvents.addListener('EShowAll', this.showAll);
    };
    componentWillUnmount(){
        mobileCompanyEvents.removeListener('EAddNewClient', this.addNewClient);
        mobileCompanyEvents.removeListener('EDeleteClient', this.deleteClient);
        mobileCompanyEvents.removeListener('ESaveNewClient', this.updateClientsList);
        mobileCompanyEvents.removeListener('EFilterActive', this.filterActive);
        mobileCompanyEvents.removeListener('EFilterBlocked', this.filterBlocked);
        mobileCompanyEvents.removeListener('EShowAll', this.showAll);
    };
    filterActive = ()=>{
        if(this.state.filter !== 'active') {
            let activeClients = this.state.clientsList.filter(item => {
                return item.balance >= 0
            });
            this.setState({filter: 'active', activeClientsList: activeClients})
        }
    };
    filterBlocked = ()=>{
        if(this.state.filter !== 'lock') {
            let lockClients = this.state.clientsList.filter(item => {
                return item.balance < 0
            });
            this.setState({filter: 'lock', lockClientsList: lockClients})
        }
    };
    showAll = ()=>{
        if(this.state.filter !== 'all') {
            this.setState({filter: 'all'})
        }
    };
    handleFilterByActivity = ()=>{
        mobileCompanyEvents.emit('EFilterActive');
    };
    handleFilterByLock = ()=>{
        mobileCompanyEvents.emit('EFilterBlocked');
    };
    handleShowAll = ()=>{
        mobileCompanyEvents.emit('EShowAll');
    };
    render(){
        console.log("MobileCompany render");
        let clientsList;
        switch(this.state.filter){
            case 'all':
                clientsList = this.state.clientsList;
                break;
            case 'active':
                clientsList = this.state.activeClientsList;
                break;
            case 'lock':
                clientsList = this.state.lockClientsList;
                break;
            default:
                clientsList = this.state.clientsList;
        }
        let clients = clientsList.map(item =>
            <Client key={item.id} info={item} />
        );
        return(
            <div className='ClientsList'>
                <h2>{this.props.name}</h2>
                <table>
                    <tbody>
                    {clients}
                    </tbody>
                </table>
                <input type='button' value='Add new client' onClick={this.handleAddNewClient}/>
                <div>
                    <input type="button" value={'Show all active'} onClick={this.handleFilterByActivity}/>
                    <input type="button" value={'Show all blocked'} onClick={this.handleFilterByLock}/>
                    <input type="button" value={'Show all'} onClick={this.handleShowAll}/>
                </div>
                {(this.state.editBlock)?
                <FormAddClient key={this.state.editInfo.id} clientInfo={this.state.editInfo}/>
                    : null
                }
            </div>
        )
    }
}