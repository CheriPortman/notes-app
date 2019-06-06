import React from 'react';
import PropTypes from 'prop-types';

function Note({ note }) {
  return (
    <section>
      <p>{note.title}</p>
      <p>{note.body}</p>
    </section>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default Note;
