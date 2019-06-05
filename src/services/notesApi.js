import React from 'react';

export const createNote = note => {
  return fetch('some url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  })
  .then(res => ([res.ok, res.json()]))
  .then(([ok, json]) => {
    if(!ok) throw 'Unable to fetch characters';

    console.log(json);
  };
