// import package
const { addNoteHandler, getAllNotesHandler,getNoteByIdHandler,editNoteByIdHandler,deleteNoteByIdHandler  } = require('./handler');

// supaya dapat menyimpan catatan
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

// supaya bisa dipakai file server.js
module.exports = routes;
