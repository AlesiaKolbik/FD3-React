
import ClientsList from './ClientsList.js';

let clientsData =[{id:12},{id:25}];
let clientsList = new ClientsList(clientsData);

test('test immutable data in function update Clients list', () => {
//при добавлении нового клиента меняется ссылка на массив
    let oldList = clientsList.getData();
    clientsList.updateList({id:5});
    let newList = clientsList.getData();

    expect(oldList).not.toBe(newList);
//при изменении списка, если данные клиента не изменились список не меняется

    let oldList2 = clientsList.getData();
    clientsList.updateList({id:12});
    let newList2 = clientsList.getData();

    expect(oldList2).toBe(newList2);

//при изменении существующего клиента массив меняет ссылку
    let oldList3 = clientsList.getData();
    clientsList.updateList({id:12, name:'anna'});
    let newList3 = clientsList.getData();

    expect(oldList3).not.toBe(newList3);

});