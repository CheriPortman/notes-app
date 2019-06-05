import React from 'react';
import PropTypes from 'prop-types';

function Note({ note }) {
  return (
    <section>
      <p>{note.title}</p>
      <p>{note.text}</p>
    </section>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Note;
