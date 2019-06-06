import React, { PureComponent } from 'react';

import { Button, Form, Input, Label, Textarea } from '../styledComponents';
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
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="title">
          Name your note:
          <Input name="title" type="text" value={title} onChange={this.handleChange} />
        </Label>
        <Label htmlFor="body">
          Enter the text of your note:
          <Textarea name="body" type="text" value={body} onChange={this.handleChange} />
        </Label>
        <Button>Submit</Button>
      </Form>
    );
  }
}
