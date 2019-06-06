import React from 'react';
import PropTypes from 'prop-types';

import Note from './Note';
import { Li, Ul } from '../styledComponents';

function Notes({ notes }) {
  const noteList = notes.map((note, index) => {
    return (
      <Li key={index}>
        <Note note={note} />
      </Li>
    );
  });

  return (
    <Ul>
      {noteList}
    </Ul>
  );
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })).isRequired
};

export default Notes;
