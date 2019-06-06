import React, { PureComponent } from 'react';
import Notes from '../notes/Notes';
import { getNotes, deleteNote } from '../../services/notesApi';

export default class AllNotes extends PureComponent {
  state = {
    notes: []
  }

  componentDidMount() {
    getNotes()
      .then((notes) => this.setState({ notes }));
  }

  componentDidUpdate() {
    getNotes()
      .then((notes) => this.setState({ notes }));
  }
  // removeNote(_id) {
  //   deleteNote(_id)
  //     .then((notes) => this.setState({ notes }));
  // }

  render() {
    const { notes } = this.state;

    return <Notes notes={notes} />;
  }
}
