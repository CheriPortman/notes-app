import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Note from './Note';

describe('Note component', () => {
  it('renders the Note app', () => {
    const wrapper = shallow(<Note note={{ title: 'note', text: 'note' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
