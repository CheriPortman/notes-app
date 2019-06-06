import React from 'react';

import CreateNoteForm from './notes/CreateNoteForm';
import AllNotes from './containers/AllNotes';
import { H1, Wrapper } from './styledComponents';

export default function App() {
  return (
    <Wrapper>
      <H1>Take Note: </H1>
      <CreateNoteForm />,
      {/* <AllNotes /> */}
    </Wrapper>
  );
}
