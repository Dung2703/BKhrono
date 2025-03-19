import { Classes } from './placeholder';

export const getSchedule = (): number[][] => {
  // Create schedule 12 rows x 6 columns
  const schedule: number[][] = Array.from({ length: 12 }, () => Array(6).fill(-1));
  let isOccupied = false;

  Classes.forEach((cls, class_index) => {
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

  // console.log(schedule);

  return schedule;
}


