import React from 'react';
import PropTypes from 'prop-types';
import { deleteNote } from '../../services/notesApi';

function Note({ note }) {
  
  return (
    <section>
      <p>{note.title}</p>
      <p>{note.body}</p>
      <button onClick={() => deleteNote(note._id)}>Remove Note</button>
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
