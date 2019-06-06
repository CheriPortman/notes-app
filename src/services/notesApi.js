const url = 'http://ec2-34-203-227-127.compute-1.amazonaws.com:7890/api/v1/notes/';


export const createNote = note => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'cannot find your notes';
      console.log(json);
    });
};

export const getNotes = () => {
  console.log('in getNotes');
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


// Object
// body: "llsdfoi"
// title: "test"
// __v: 0
// _id: "5cf93a6d79004c545a1cbd75"
// __proto__: Object
