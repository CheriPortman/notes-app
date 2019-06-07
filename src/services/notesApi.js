const url = 'http://ec2-34-203-227-127.compute-1.amazonaws.com:7890/api/v1/notes/';


export const createNote = note => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  })
  //brackets because in a promise, you can only send one thing through
  //the brackets / array make it one object
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {  //here the array is 'renamed' to get rid of the dot notation
      if(!ok) throw 'cannot find your notes';
      console.log(json);
    });
};

export const getNotes = () => {
  return fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'cannot find notes';
      return json;
    });
};

export const deleteNote = (_id) => {
  console.log('in deleteNote');
  return fetch(url + _id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    _id: JSON.stringify(_id)
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'cannot delete your note';
      return json;
    });
};


// Object
// body: "llsdfoi"
// title: "test"
// __v: 0
// _id: "5cf93a6d79004c545a1cbd75"
// __proto__: Object
