import React from 'react';
import { shallow, Shallow } from 'enzyme';

//components
import Input from './input';

//utils
import { findByTestAttr } from '../test/testUtils';

/** 
 * @returns {ShallowWrapper}
*/
const setup = () => {
  return shallow(<Input />);
}

test('renders without crashing', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'input-component');
  expect(component.length).toBe(1);
});