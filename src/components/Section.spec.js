import React from 'react';
import { shallow } from 'enzyme';
import Section from './Section.jsx';

describe('<Section>', () => {
  it("Should display the given title", ()=> {
    const wrapper = shallow(<Section title="Section Title"/>);
    const actual = wrapper.find('h2').text();
    const expected = "Section Title"

    expect(actual).toEqual(expected);

  });
});
