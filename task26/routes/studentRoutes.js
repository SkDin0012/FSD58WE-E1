const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

router.post('/', studentController.createStudent);
router.put('/:studentId/mentor/:mentorId', studentController.changeMentorForStudent);
router.get('/:studentId/mentor', studentController.showMentorForStudent);

module.exports = router;
