export interface Course {
  course_id: string;
  class: string;
  class_lab?: string;
}

export interface Class {
  type: string;
  course_id: string;
  class: string;
  current_quantity: number;
  max_quantity: number;
  date: number;
  time: number[];
  room: string;
  class_lab?: string;
  date_lab?: number;
  time_lab?: number[];
  room_lab?: string;
}

export interface SchedulePriority {
  monday: number[];
  tuesday: number[];
  wednesday: number[];
  thursday: number[];
  friday: number[];
  saturday: number[];
}

export interface SchedulePriorityStrings {
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
  saturday: string[];
}

export interface useSchedulePriorityProps {
  schedulePriority: {
    monday: string[],
    tuesday: string[],
    wednesday: string[],
    thursday: string[],
    friday: string[],
    saturday: string[]
  },
  setSchedulePriority: {
    setMonday: React.Dispatch<React.SetStateAction<string[]>>,
    setTuesday: React.Dispatch<React.SetStateAction<string[]>>,
    setWednesday: React.Dispatch<React.SetStateAction<string[]>>,
    setThursday: React.Dispatch<React.SetStateAction<string[]>>,
    setFriday: React.Dispatch<React.SetStateAction<string[]>>,
    setSaturday: React.Dispatch<React.SetStateAction<string[]>>
  }
}