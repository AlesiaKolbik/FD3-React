
import equal from "deep-equal";

export default class ClientsList{
    constructor(clients){
        this.clients = clients;
    }
    getData =()=>{
        return this.clients;
    };

    deleteItem = (id)=>{
        let changedList = this.clients.filter(item => {
            return item.id !== id
        });
        this.clients = changedList;
    };

    updateList =(client)=>{
        let clientsListCopy = this.createNewClientsList(client);
        if(clientsListCopy) {
            this.clients = clientsListCopy;
        }
    };
    createNewClientsList = (newClient) =>{
        let clients = [...this.clients];
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
}