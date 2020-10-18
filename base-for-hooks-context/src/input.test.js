import React from 'react';
import { shallow, Shallow } from 'enzyme';

//components
import Input from './input';

//utils
import { checkProps, findByTestAttr } from '../test/testUtils';

/** 
 * @returns {ShallowWrapper}
*/
const setup = (secretWord='party') => {
  return shallow(<Input secretWord={secretWord} />);
}

test('renders without crashing', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'input-component');
  expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(Input, { secretWord: 'Party' });
})