import React from 'react';
import Enzyme from 'enzyme';
import checkPropTypes from 'check-prop-types';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import mocks from './mock.js';
import App from './client/app.jsx';
import Description from './client/components/description.jsx';
import ShipPay from './client/components/ship_pay.jsx';
import ReturnPolicy from './client/components/return_policy.jsx';

const request = require('supertest');
const app = require('./server/index.js');


describe('Test the server and database: Integration test', () => {

  test('It should return product information from both collections', (done)=> {
    request(app)
    .get('/description?prod_id=0')
    .expect('Content-Type', /json/)
    .then((res) => {
      expect(res.body[0].item_number).toBe(res.body[1].item_number);
      done()
    })
  });

  test('It should return a respones 200 to GET request', (done) => {
    request(app)
    .get('/description?prod_id=0')
    .expect('Content-Type', /json/)
    .then((res) => {
      expect(200)
      done()
    })
  });
});


describe('Testing App component from app.jsx', () => {

  test('it should render without errors', () => {
    const component = shallow(<App />);
    const wrapper = component.find(`[data-test='default']`);
    expect(wrapper.length).toBe(1)
  });

  test('it should render describe tab', () => {
    const component = shallow(<App />);
    component.setState({data:[{},{}]})
    const wrapper = component.find(`[data-test='description']`)
    expect(wrapper.length).toBe(1);
  });

  test('it should render shipping and payment tab', () => {
    const component = shallow(<App />);
    component.setState({data:[{},{}]})
    component.setState({page: 1})
    const wrapper = component.find(`[data-test='ship_pay']`)
    expect(wrapper.length).toBe(1);
  });

  test('it should run get request with componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.callCount).toBe(1);
    App.prototype.componentDidMount.restore();
  });

});

describe('Testing the description tab from description.jsx', () => {

  test('it should render without errors', () => {
    const component = mount(<Description prodInfo={mocks.prodInfo} />);
    const wrapper = component.find(`[data-test="desc-section"]`).hostNodes()
    expect(wrapper.length).toBe(1)
  });

  test('it should have correct datatypes passed through props to Description component', () => {
    const expectedProps = mocks.prodInfo
    const propsErr = checkPropTypes(Description.propTypes, expectedProps, 'props', Description.name);
    expect(propsErr).toBeUndefined();
  });

});

describe('Testing the shipping and payments tab from ship_pay.jsx', () => {

  test('it should render ship_pay component without errors', () => {
    const component = mount(<ShipPay payment={mocks.payment}/>)
    const wrapper = component.find(`[data-test="ship-section"]`).hostNodes()
    expect(wrapper.length).toBe(1)
  });

  test('it should have correct datatypes passed through props to ShipPay component', () => {
    const expectedProps = mocks.payment
    const propsErr = checkPropTypes(ShipPay.propTypes, expectedProps, 'props', ShipPay.name);
    expect(propsErr).toBeUndefined();
  });

  test('it should render return policy component without errors', ()=> {
    const component = mount(<ReturnPolicy returns={mocks.payment}/>);
    const wrapper = component.find(`[data-test='returns-section']`).hostNodes();
    expect(wrapper.length).toBe(1)
  });

  test('it should render correct return policy table if there is a return policy', () => {
    const component = mount(<ReturnPolicy returns={mocks.payment}/>);
    const wrapper = component.find(`[data-test="can-return"]`).hostNodes();
    expect(wrapper.length).toBe(1)
  });

  test('it should render correct return policy table if there is no return policy', () => {
    const component = mount(<ReturnPolicy returns={mocks.noReturn}/>);
    const wrapper = component.find(`[data-test="no-return"]`).hostNodes();
    expect(wrapper.length).toBe(1)
  });

  test('it should have correct datatypes passed through props to ReturnPolicy component', () => {
    const expectedProps = mocks.payment
    const propsErr = checkPropTypes(ReturnPolicy.propTypes, expectedProps, 'props', ReturnPolicy.name);
    expect(propsErr).toBeUndefined();
  });

});



