import { getClassesList, parseClassString, getClassesFromCourse, fillClasses } from "./data";
import { Class, SchedulePriority, SchedulePriorityStrings } from "./types";
import { classes_nonlab, classes_lab, course_ids, subjectNames } from "./data";

export const addCourse = (rawData: string) => {
  const classStrings = getClassesList(rawData);
  let course_added = false; // Flag to check if a course was added
  classStrings.forEach((classStr: string) => {
    const parsedClasses = parseClassString(classStr); // Parse the class string into objects
    parsedClasses.forEach((classObj: Class) => {      
      // Uncomment this if you want to check the max quantity of classes
      // if (classObj.current_quantity < classObj.max_quantity) {
        if (classObj.type === "non-lab") {
          classes_nonlab.push(classObj); // Add to non-lab array
        } 
        else if (classObj.type === "lab") {
          classes_lab.push(classObj); // Add to lab array
        }
      // }

      // Add course_id to the course_ids array
      if (!course_ids.includes(classObj.course_id)) {
        course_ids.push(classObj.course_id);
      }
    });
    course_added = true; // Set the flag to true if a course was added
  });
  if (!course_added) {
    subjectNames.pop(); // Remove the last subject name if no course was added
  }
  // console.log("Non-Lab Array:", classes_nonlab);
  // console.log("Lab Array:", classes_lab);
  return course_ids;
};

export const removeCourse = (course_id : string) => {
  course_ids.splice(course_ids.indexOf(course_id), 1); // Remove course_id from the course_ids array
  // courses.splice(courses.findIndex((course) => course.course_id === course_id), 1); // Remove course from the courses array
  classes_nonlab.splice(classes_nonlab.findIndex((course) => course.course_id === course_id), 1); // Remove course from the classes_nonlab array
  classes_lab.splice(classes_lab.findIndex((course) => course.course_id === course_id), 1); // Remove course from the classes_lab array
}

export const getSchedule = (schedulePriority: SchedulePriority): string[][] => {
  // Create schedule 12 rows x 6 columns
  const schedule: string[][] = Array.from({ length: 12 }, () => Array(6).fill("-1"));

  // Get classes from one course and fill them in the schedule
  const shuffled_course_ids = course_ids.sort(() => Math.random() - 0.5);
  for (const course_id of shuffled_course_ids) {
    const classes = getClassesFromCourse(course_id, classes_lab, schedulePriority);
    if (classes.length !== 0) {
      fillClasses(schedule, classes);
      continue;
    }
    const classes2 = getClassesFromCourse(course_id, classes_nonlab, schedulePriority);
    fillClasses(schedule, classes2);
  }

  // console.log(schedule);
  return schedule;
}

export const getSchedulePriority = (schedulePriorityStrings: SchedulePriorityStrings): SchedulePriority => {
  // Convert string 7-8h to number 2; 8-9h to 3; etc.
  const schedulePriority: SchedulePriority = {
    monday: schedulePriorityStrings.monday.map((time) => parseInt(time.split("-")[0]) - 5),
    tuesday: schedulePriorityStrings.tuesday.map((time) => parseInt(time.split("-")[0]) - 5),
    wednesday: schedulePriorityStrings.wednesday.map((time) => parseInt(time.split("-")[0]) - 5),
    thursday: schedulePriorityStrings.thursday.map((time) => parseInt(time.split("-")[0]) - 5),
    friday: schedulePriorityStrings.friday.map((time) => parseInt(time.split("-")[0]) - 5),
    saturday: schedulePriorityStrings.saturday.map((time) => parseInt(time.split("-")[0]) - 5),
  };
  // console.log(schedulePriority);
  return schedulePriority;
}