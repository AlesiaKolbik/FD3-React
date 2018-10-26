
import ClientsList from '../ClientsList.js';

let clientsData =[{id:12},{id:25}];
let clientsList = new ClientsList(clientsData);

test('test immutable data in function delete client from list', () => {

    let oldList = clientsList.getData();
    clientsList.deleteItem(12);
    let newList = clientsList.getData();

    expect(oldList).not.toBe(newList);

});