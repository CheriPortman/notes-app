import React from 'react';

import CreateNoteForm from './notes/CreateNoteForm';
import AllNotes from './containers/AllNotes';

export default function App() {
  return (
    <>
      <h1>Take Note: </h1>
      <CreateNoteForm />,
      <AllNotes />
    </>
  );
}
