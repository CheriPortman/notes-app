import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CreateNoteForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = { title: '', text: '' };

  handleSubmit = event => {
    event.preventDefault();
    const { title, text } = this.state;

    this.props.onSubmit(title, text);
    this.setState({ title: '', text: '' });
  }

  

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Name your note:
          <input name="title" type="text" value={title} onChange={this.handleChange} />
        </label>
        <label htmlFor="text">
          Enter the text of your note:
          <textarea name="text" type="text" value={text} onChange={this.handleChange} />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}
