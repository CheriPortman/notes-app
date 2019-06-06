import React from 'react';

import CreateNoteForm from './notes/CreateNoteForm';
// import Notes from './notes/Notes';

export default function App() {
  return (
    <>
      <h1>Take Note: </h1>
      <CreateNoteForm />,
      {/* <Notes /> */}
    </>
  );
}
