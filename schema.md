# TGMS Pegadapally Firestore model

users/{uid}
- role: admin | teacher | student
- name, studentId, className, section, stream
- active

teacherAssignments/{id}
- teacherUid
- className
- sectionOrStream
- subject
- timetable: [{day, period, time}]

accountRequests/{id}
- name, category, className, sectionStream, studentId, guardian
- status: pending | approved | rejected
- createdAt

groupRequests/{id}
- name, studentId, className, sectionStream, group
- status: pending | approved | rejected
- createdAt

exams/{id}
- title, className, sectionOrStream, subject
- examDate, maxMarks, duration, published

marks/{id}
- examId, studentUid/studentId, teacherUid, marks
- status: draft | final
- finalSubmittedAt
- reopenRequestedAt
- reopenedByAdminAt

studyResources/{id}
- teacherUid, className, sectionOrStream, subject
- type: video | pdf | dpp | quiz | notes | questionPaper | other
- title, url, createdAt

groupPoints/{id}
- group
- points
- sourceType, sourceId
- verifiedBy, createdAt

## Class structure
6: one section
7: one section
8: A/B
9: A/B
10: A/B
Inter 1: MPC/BiPC/CEC
Inter 2: MPC/BiPC/CEC

## Subject map
6–7: Telugu, Hindi, English, Maths, Science, Social
8–10: Telugu, Hindi, English, Maths, Science, Social, Biology
Inter MPC: Maths, Physics, Chemistry, Telugu, English
Inter BiPC: Physics, Chemistry, Botany, Zoology, Telugu, English
Inter CEC: Commerce, Economics, Accountancy, Political Science, Telugu, English
