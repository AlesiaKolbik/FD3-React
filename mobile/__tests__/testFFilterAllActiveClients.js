import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import MobileCompany from '../components/MobileCompany.js';

let instance: TestRenderer.ReactTestInstance;
let clientsData =[{id:12,fio:'a',balance:1},{id:25,fio:'b',balance:-1}];

describe('render all active clients list', () => {
    it('render init',()=>{
        const component = TestRenderer.create(
            <MobileCompany name={'name'} clients={clientsData}/>
        );
        instance = component.root;

        let componentTree = component.toJSON();
        expect(componentTree).toMatchSnapshot();

        const btn = instance.find((el) =>
            el.type == 'input'
            && el.props.className == 'showActive');

        btn.props.onClick();

        componentTree = component.toJSON();
        expect(componentTree).toMatchSnapshot();
    });

});