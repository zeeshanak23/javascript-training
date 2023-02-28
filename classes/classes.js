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
let c313 = new Course1(3, "java", 05, "Graduate", new Date("2023-04-18"))



const newCourses = [c11, c22, c33]

/**Filter the courses that have already started.
- Filter the courses that will start in next 7 days.
- Filter the courses that will start in a month
- Filter the courses that have already been completed. */

const alreadyStarted = (newCourses) => {
    return newCourses.filter(x => x.startDate < new Date())
}

let today1 = new Date()
let after7day = today.setDate(today.getDate() + 7)
// call=new Date(after7day)

const checkWeek12 = (newCourses) => {
    newCourses.filter(x => x.startDate.getTime() <= after7day && x.startDate >= today1.getTime())
    return newCourses
}

// let getMonth1 = new Date(date.setMonth(date.getMonth() + 6))
// const checkMonth = (newCourses) => {
//     newCourses.filter(x => x.startDate == getMonth)
//     return newCourses
// }

const alreadyCompleted = (courses) => {
    return courses.filter(x => x.startDate > new Date())
}

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