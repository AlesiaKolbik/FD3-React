import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany.js';

let clientsData =[{id:12,fio:'a',balance:1},{id:25,fio:'b',balance:-1}];

test('render all active clients list', () => {

    const component = renderer.create(
        <MobileCompany  name={'name'} clients={clientsData}/>
    );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    let button = document.querySelector('.showAll');
    button.click();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

});
