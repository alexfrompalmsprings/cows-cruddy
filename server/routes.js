// !im going to need to add the get && the post here


const express = require('express')
const router = require("./routes.js");


//! the routes I need to have in the file
router.get('api/cows', models.index.get);
router.post('api/cows', models.index.post);

//! need to export something at the very end
module.exports = router;