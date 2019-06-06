import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function Notes({ notes }) {
  const noteList = notes.map((note, index) => {
    return (
      <li key={index}>
        <Note note={note} />
      </li>
    );
  });

  return (
    <ul>
      {noteList}
    </ul>
  );
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })).isRequired
};

export default Notes;
