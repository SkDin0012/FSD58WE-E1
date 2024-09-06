const express = require('express');
const router = express.Router();
const mentorController = require('../controller/mentorController');

router.post('/', mentorController.createMentor);
router.post('/:mentorId/students/:studentId', mentorController.assignStudentToMentor);
router.get('/:mentorId/students', mentorController.showStudentsForMentor);

module.exports = router;
