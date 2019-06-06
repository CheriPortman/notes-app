import React, { PureComponent } from 'react';
import { createNote } from '../../services/notesApi';

export default class CreateNoteForm extends PureComponent {
  
  state = { title: '', body: '' };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;

    createNote({ title, body });
    this.setState({ title: '', body: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Name your note:
          <input name="title" type="text" value={title} onChange={this.handleChange} />
        </label>
        <label htmlFor="body">
          Enter the text of your note:
          <textarea name="body" type="text" value={body} onChange={this.handleChange} />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}
