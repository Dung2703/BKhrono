import { getClassesList, parseClassString, getClassesFromCourse, fillClasses } from "./data";
import { Class, Course, SchedulePriority, SchedulePriorityStrings } from "./types";


//Arrays to be processed further
const course_ids: string[] = []; // Used to setCourses in SideBar
const courses: Course[] = []; // Used to check if the class is already in the array
const classes_nonlab: Class[] = [];
const classes_lab: Class[] = [];



export const setClassesArrays = (rawData: string) => {
  const classStrings = getClassesList(rawData);
  classStrings.forEach((classStr: string) => {
    const parsedClasses = parseClassString(classStr); // Parse the class string into objects
    parsedClasses.forEach((classObj: Class) => {
      // Check if the class is already in the array
      if (
          courses.some((course) => course.course_id === classObj.course_id && course.class === classObj.class && course.class_lab === classObj.class_lab)
          || courses.some((course) => course.course_id === classObj.course_id && course.class === classObj.class && course.class_lab === undefined)
         ) return;
      courses.push({ course_id: classObj.course_id, class: classObj.class, class_lab: classObj.class_lab });
      
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
  });

  // console.log("Non-Lab Array:", classes_nonlab);
  // console.log("Lab Array:", classes_lab);
  return course_ids;
};

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