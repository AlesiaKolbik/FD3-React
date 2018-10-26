import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany.js'

// let instance: TestRenderer.ReactTestInstance;

let clientsData =[{id:12,fio:'a',balance:1},{id:25,fio:'b',balance:-1}];

const component = renderer.create(
    <MobileCompany name={'name'} clients={clientsData}/>
);
test('render all active clients list', () => {

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    // const Button = component.find(
    //     (el) => el.type == 'input'
    //         && el.props.type == 'button'
    //         && el.props.value == 'Show all active'
    // );
    // Button.props.onClick();

    // componentTree=component.toJSON();
    // expect(componentTree).toMatchSnapshot();

});
