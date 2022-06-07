const express = require('express');
const {handlepost,printUserDetails} = require('../controllers/student');

const router  = express.Router();


router.get('/',handlepost);
router.get('/get',printUserDetails);

module.exports = router;