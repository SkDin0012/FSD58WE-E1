const Mentor = require('../models/mentor');
const Student = require('../models/student');

exports.createMentor = async (req, res) => {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(201).send(mentor);
};

exports.assignStudentToMentor = async (req, res) => {
    const { mentorId, studentId } = req.params;
    const mentor = await Mentor.findById(mentorId);
    const student = await Student.findById(studentId);

    if (student.mentor) {
        return res.status(400).send('Student already has a mentor');
    }

    student.mentor = mentor._id;
    await student.save();

    mentor.students.push(student._id);
    await mentor.save();

    res.send(mentor);
};

exports.showStudentsForMentor = async (req, res) => {
    const { mentorId } = req.params;
    const mentor = await Mentor.findById(mentorId).populate('students');
    res.send(mentor.students);
};
