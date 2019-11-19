
//! might want to change the location
let dbConnect = require('../db/index.js');

module.exports = {
  cows. {
  get: (req, res) => {
    dbConnect
    .then((db) => {
      db.query('SELECT * FROM cows', function (err, response, fields) {
        res.send(response);
      });
    })
  }

  //! need to add post after get works!





}