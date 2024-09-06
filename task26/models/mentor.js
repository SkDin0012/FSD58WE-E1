const mongoose =require("mongoose");

const mentorSchema=new mongoose.Schema({
    name: String,
    student: [{type:mongoose.Schema.Types.ObjectId,ref:'Student'}],

});

module.exports=mongoose.model('Mentor',mentorSchema);