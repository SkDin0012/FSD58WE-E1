create DATABASE GuviZenclass;
use GuviZenclass;

CREATE TABLE student (
    userid INT PRIMARY KEY AUTO_INCREMENT,
    studentname VARCHAR(25) UNIQUE,
    studentemail VARCHAR(25) UNIQUE,
    studentmobile VARCHAR(25) UNIQUE
);

CREATE TABLE course (
    courseid INT AUTO_INCREMENT PRIMARY KEY,
    userid INT,
    couresname VARCHAR(25),
    coureseduration VARCHAR(255),
    couresefee VARCHAR(25),
    FOREIGN KEY (userid)
        REFERENCES student (userid)
);

CREATE TABLE admission (
    userid INT,
    courseid INT,
    admissionfee VARCHAR(25),
    FOREIGN KEY (userid)
        REFERENCES student (userid),
    FOREIGN KEY (courseid)
        REFERENCES course (courseid)
);

create table codeketa(
userid int,
problemsolve varchar(25) not null,
foreign key (userid) REFERENCES student(userid)
);

CREATE TABLE mentor (
    userid INT,
    courseid INT NOT NULL,
    m_name VARCHAR(25),
    FOREIGN KEY (userid)
        REFERENCES student (userid),
    FOREIGN KEY (courseid)
        REFERENCES course (courseid)
);

create table studenattendance(
  attendanceid int primary key AUTO_INCREMENT,
  userid int,
  attendancedate datetime default now(),
  foreign key (userid) REFERENCES student(userid)
);


create table task(
  userid int,
  tasksubmited varchar(25) not null,
  mark varchar(25),
  foreign key (userid) REFERENCES student(userid)
);

CREATE TABLE leaderboard (
    userid INT,
    courseid INT,
    batch VARCHAR(25) NOT NULL,
    tasksubmited VARCHAR(25) NOT NULL,
    FOREIGN KEY (userid)
        REFERENCES student (userid),
    FOREIGN KEY (courseid)
        REFERENCES course (courseid)
);

create table queries(
  userid int,
  topics varchar(2000),
reasonsqueries varchar(2550),
  foreign key (userid) REFERENCES student(userid)
);