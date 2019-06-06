import React from 'react';
import { shallow } from 'enzyme';
import CreateNoteForm from './CreateNoteForm';

describe('CreateNoteForm componenet', () => {
  it('renders the form', () => {
    const wrapper = shallow(<CreateNoteForm onSubmit={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('updates title on change', () => {
    const wrapper = shallow(<CreateNoteForm onSubmit={jest.fn()} />);
    wrapper.find('[name="title"]').at(1).simulate('change', {
      target: { name: 'title', value: 'note' }
    });
  });

  it('updates text on change', () => {
    const wrapper = shallow(<CreateNoteForm onSubmit={jest.fn()} />);
    wrapper.find('[name="text"]').at(0).simulate('change', {
      target: { name: 'text', value: 'this is text' }
    });
  });

  it('handles submitting a new note', () => {
    const submit = jest.fn();
    const wrapper = shallow(<CreateNoteForm onSubmit={submit} />);

    wrapper.find('form').at(1).simulate('submit', {
      preventDefault: jest.fn(),
    });

    expect(submit).toHaveBeenCalled();
  });
});
