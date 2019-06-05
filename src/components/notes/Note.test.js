import React from 'react';
import { shallow } from 'enzyme';
import Note from './Note';

describe('Note componenet', () => {
  it('renders the Note app', () => {
    const wrapper = shallow(<Note note={{ title: "note", text: "note" }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
