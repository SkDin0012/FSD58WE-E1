const Student = require('../models/student');
const Mentor = require('../models/mentor');

exports.createStudent = async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
};

exports.changeMentorForStudent = async (req, res) => {
    const { studentId, mentorId } = req.params;
    const student = await Student.findById(studentId);
    const oldMentor = await Mentor.findById(student.mentor);
    const newMentor = await Mentor.findById(mentorId);

    if (oldMentor) {
        oldMentor.students.pull(student._id);
        await oldMentor.save();
    }

    student.mentor = newMentor._id;
    await student.save();

    newMentor.students.push(student._id);
    await newMentor.save();

    res.send(student);
};

exports.showMentorForStudent = async (req, res) => {
    const { studentId } = req.params;
    const student = await Student.findById(studentId).populate('mentor');
    res.send(student.mentor);
};
