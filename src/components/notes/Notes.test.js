import React from 'react';
import { shallow } from 'enzyme';
import Notes from './Notes';

describe('Notes component', () => {
  it('renders the notes list', () => {
    const notes = [
      { title: 'to do', text: 'do this' },
      { title: 'another todo', text: 'do it again' }
    ];
    const wrapper = shallow(<Notes notes={notes} />);
    expect(wrapper).toMatchSnapshot();
  });
});
