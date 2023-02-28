/**Write a function constructor to create an object of Course, where the course
 *  would be having following properties:

- courseId(number)
- name(string)
- durationInMonths(number)
- eligibility(string)
- startDate(date)
 */

function Course(courseId, name, durationInMonths, eligibility, startDate) {
    this.courseId = courseId;
    this.name = name;
    this.durationInMonths = durationInMonths;
    this.eligibility = eligibility;
    this.startDate = startDate;
}

/**Create 3 courses and store in an array - `courses` */
let course1 = new Course(1, "full-stack", "12 month", "Graduate", new Date("2023-03-10"))
let course21 = new Course(2, "aws", 06, "Matric", new Date("2020-10-05"))
let course31 = new Course(3, "java", 05, "Graduate", new Date("2021-10-18"))

const courses = [course1, course21, course31]

/**Filter the courses that have already started.
- Filter the courses that will start in next 7 days.
- Filter the courses that will start in a month
- Filter the courses that have already been completed. */

const alreadyStarted = (courses) => {
    return courses.filter(x => x.startDate < new Date().getUTCFullYear())
}

const alreadyCompleted = (courses) => {
    return courses.filter(x => x.startDate > new Date().getUTCFullYear())
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