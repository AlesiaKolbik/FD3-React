import React from 'react';
import renderer from 'react-test-renderer';


import MobileCompany from '../components/MobileCompany.js';

let clientsData =[{id:12,fio:'a',balance:1},{id:25,fio:'b',balance:-1}];
let clientsDataFilter = [{id:25,fio:'b',balance:-1}];

describe('render all active clients list', () => {
    it('render init',()=>{
        const component = renderer.create(
            <MobileCompany name={'name'} clients={clientsData}/>
        );

        let componentTree = component.toJSON();
        expect(componentTree).toMatchSnapshot();
    });
    it('render all lock clients',()=>{
        const component = renderer.create(
            <MobileCompany name={'name'} clients={clientsDataFilter}/>
        );

        let componentTree = component.toJSON();
        expect(componentTree).toMatchSnapshot();
    });

});
