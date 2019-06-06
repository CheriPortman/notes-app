import React, { PureComponent } from 'react';
import Notes from '../notes/Notes';
import { getNotes } from '../../services/notesApi';

export default class AllNotes extends PureComponent {
  state = {
    notes: []
  }

  componentDidMount() {
    console.log('component');
    getNotes()
      .then((notes) => this.setState({ notes }));
  }

  render() {
    const { notes } = this.state;

    return <Notes notes={notes} />;
  }
}
