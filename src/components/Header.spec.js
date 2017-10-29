import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.jsx';

describe('<Header />', () => {
  it('should have an h1 with Paul Mooney', ()=> {
    const wrapper = shallow(<Header/>);
    const actual = wrapper.find('h1').text();
    const expected = 'Paul Mooney';

    expect(actual).toEqual(expected);
  })
})
