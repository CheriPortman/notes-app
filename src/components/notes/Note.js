import React from 'react';
import PropTypes from 'prop-types';

import { deleteNote } from '../../services/notesApi';
import { Button, PT } from '../styledComponents';

function Note({ note }) {
  return (
    <section>
      <PT>{note.title}</PT>
      <p>{note.body}</p>
      <Button onClick={() => deleteNote(note._id)}>Delete This Note</Button>
    </section>
  );
}
// deleteNote.bind(null, note._id)
Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default Note;
