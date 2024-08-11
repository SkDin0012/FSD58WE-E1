
const ResumeDetails={

    "Details" : [
        {   
            "Id":"001",
            "name":"santhosh",
            "age":25,
            "country":"india",
            "city":"madurai"
        },
    ],

    "experience" :[
        {
            "title":"System Engineer",
            "Company": "infy",
            "Location": "chennai",
            "date ":"2022 - Present",
            "description":"The System Engineer,Game Developer,React Developer"

        }
    ],

    "skills": [
        "java deveopler",
        "gama developer",
        "ethical Hacker",
        "react deveopler"
      ]
};


//for  and for in

for (let k in ResumeDetails) {
    if (ResumeDetails.hasOwnProperty(k)) {
      console.log(`${k}: ${ResumeDetails[k]}`);
    }
  }

//for  loop:

for(let experiences in ResumeDetails.experience ){
    console.log(experiences);
}

// forEach
ResumeDetails.skills.forEach(skill => {
    console.log(skill);
});