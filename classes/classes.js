/**Write a function constructor to create an object of Course, where the course
 *  would be having following properties:

- courseId(number)
- name(string)
- durationInMonths(number)
- eligibility(string)
- startDate(date)
 */

function Course1(courseId, name, durationInMonths, eligibility, startDate) {
    this.courseId = courseId;
    this.name = name;
    this.durationInMonths = durationInMonths;
    this.eligibility = eligibility;
    this.startDate = startDate;
}

/**Create 3 courses and store in an array - `courses` */
let c11 = new Course1(1, "full-stack", 12, "Graduate", new Date("2023-03-05"))
let c22 = new Course1(2, "aws", 06, "Matric", new Date("2023-02-15"))
let c33 = new Course1(3, "java", 05, "Graduate", new Date("2023-04-18"))



const newCourses = [c11, c22, c33]

/**Filter the courses that have already started.
- Filter the courses that will start in next 7 days.
- Filter the courses that will start in a month
- Filter the courses that have already been completed. */

const alreadyStarted = (newCourses) => {
    return newCourses.filter(x => x.startDate < new Date())
}

let today1 = new Date()
let after7day = today1.setDate(today1.getDate() + 7)
// call=new Date(after7day)

const checkWeek12 = (newCourses) => {
    newCourses.filter(x => x.startDate.getTime() <= after7day && x.startDate >= today1.getTime())
    return newCourses
}
let next30day = today1.setMonth(today1.getMonth() + 1)
const checkMonth = (newCourses) => {
    newCourses.filter(c => c.startDate >= today1 && c.startDate <= next30day)
}

// let getMonth1 = new Date(date.setMonth(date.getMonth() + 6))
// const checkMonth = (newCourses) => {
//     newCourses.filter(x => x.startDate == getMonth)
//     return newCourses
// }

newCourses.filter(c => {
    let courseEndDate = new Date(c.startDate.setMonth(c.startDate.getMonth() + c.durationInMonths))
    return courseEndDate <= today1
})
// const alreadyCompleted = (courses) => {
// return courses.filter(x => x.startDate > new Date())
// }

/**Create a function constructor `Student` with the following properites:

- studentId(number)
- name(string)
- age(string)
- qualification(string) */

function Student(studentId, name, age, qualification) {
    this.studentId = studentId;
    this.name = name;
    this.age = age;
    this.qualification = qualification;
}

let S1 = new Student(1, "zeeshan", "20", "Graduation")
let S2 = new Student(2, "sikandar", "40", "matric")
let S3 = new Student(3, "krishna", "40", "mbbs")
let S4 = new Student(4, "rahul", "10", "internediate")
let S5 = new Student(5, "fahad", "50", "llb")

let students = [S1, S2, S3, S4, S5]

/**Create a function constructor `Application` with the following attributes:

- applicationId(number)
- applicationState(string - accepted/rejected/applied)
- applicant(number)
- courseId(number) */

function Application(applicationId, applicationState, applicant, courseId) {
    this.applicationId = applicationId;
    this.applicationState = applicationState;
    this.applicant = applicant;
    this.courseId = courseId;
}
/**Create an array of 10 `applications` that consist of **Application** objects */

let a1 = new Application(1, "applied", 1, 31)
let a2 = new Application(2, "accepted", 2, 51)
let a3 = new Application(3, "rejected", 3, 71)
let a4 = new Application(4, "applied", 4, 98)
let a5 = new Application(5, "rejected", 5, 61)
let a6 = new Application(6, "accepted", 52, 62)
let a7 = new Application(7, "applied", 46, 81)
let a8 = new Application(8, "rejected", 23, 72)
let a9 = new Application(9, "accepted", 45, 53)
let a10 = new Application(10, "rejected", 98, 52)

let applications = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10]

/**ake sure you use the `applicant` corresponds to the `studentId` in the student's object 
 * and `courseId` corresponds to the `courseId` in the Course object. */

Student.convertToMap = function (students) {
    let map = new Map();
    students.forEach(s => map.set(s.studentId, s))
    return map;
}


const studentMap = Student.convertToMap(students)

/**Write a function to find all the students whose applications were rejected */
applications.filter(x => x.applicationState == "rejected").map(x => studentMap.get(x.applicant))

/** Write a function to find the students who only applied to two courses. */

let applicantMap = new Map()
applications.forEach(a => {
    if (applicantMap.has(a.applicant)) {
        applicantMap.set(a.applicant, applicantMap.get(a.applicant) + 1)
    } else {
        applicantMap.set(a.applicant, 1)
    }
})

applicantMap
for ([k, v] of applicantMap) {
    if (v == 2) {
        console.log(studentMap.get(k))
    }
}
/**Write a function to find the courses, for which there are less than 5 applications. */

let courseIdMap = new Map()
applications.forEach(a => {
    if (courseIdMap.has(a.courseId)) {
        courseIdMap.set(a.courseId, courseIdMap.get(a.courseId) + 1)
    } else {
        courseIdMap.set(a.courseId, 1)
    }
})

courseIdMap
for ([k, v] of courseIdMap) {
    if (v < 5) {
        console.log(studentMap.get(k))
    }
}

/**Write a function to find the students, who are not eligible to any of the courses. */

//**students.filter(x => x.qualification == "mbbs")**//
// newCourses.map(c=>c.eligibility.toLowerCase())
new Set(newCourses.map(c => c.eligibility.toLowerCase()))
let eligibilities = new Set(newCourses.map(c => c.eligibility.toLowerCase()))
students.filter(s => eligibilities.has(s.qualification.toLowerCase()))

//**newCourses.map(c => c.eligibility.toLowerCase())*/
