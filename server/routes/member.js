const express = require('express');
const router = express.Router();
const memberController = require('../controllers/Member');

router.get('/', memberController.getAllMembers);
router.post('/', memberController.addMember);

module.exports = router;