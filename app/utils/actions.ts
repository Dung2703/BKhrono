import { getClassesList, parseClassString } from "./data";
import { Class, Course } from "./types";


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

      if (classObj.type === "non-lab") {
        classes_nonlab.push(classObj); // Add to non-lab array
      } 
      else if (classObj.type === "lab") {
        classes_lab.push(classObj); // Add to lab array
      }

      // Add course_id to the course_ids array
      if (!course_ids.includes(classObj.course_id)) {
        course_ids.push(classObj.course_id);
      }
    });
  });

  console.log("Non-Lab Array:", classes_nonlab);
  console.log("Lab Array:", classes_lab);
  return course_ids;
};

export const getSchedule = (): number[][] => {
  // Create schedule 12 rows x 6 columns
  const schedule: number[][] = Array.from({ length: 12 }, () => Array(6).fill(-1));
  let isOccupied = false;

  classes_nonlab.forEach((cls, class_index) => {
    const { class: classID, date, time, date_lab, time_lab, class_lab } = cls;
    const [start, end] = time;
    const [start_lab, end_lab] = time_lab || [0, 0];

    // Calculate row index for the class
    // EXP: start = 2 => rowIndex = 0 => Time slot 7-8h
    const rowIndex = start - 2; 
    const rowIndexLab = start_lab - 2;

    // Calculate column index for the class
    // EXP: date = 2 => colIndex = 0 => Monday
    const colIndex = date - 2;
    const colIndexLab = (date_lab || -1) - 2;

    // Fill the schedule with class data. class_index means the cell is occupied with Classes[class_index]
    for (let i = 0; i < end - start + 1; i++) {
      if (schedule[rowIndex + i][colIndex] !== -1) {
        isOccupied = true;
        break;
      }
      schedule[rowIndex + i][colIndex] = class_index;
    }
    if (!isOccupied && class_lab) {
      for (let i = 0; i < end_lab - start_lab + 1; i++) {
        schedule[rowIndexLab + i][colIndexLab] = class_index;
      }
    }
  });


  return schedule;
}


