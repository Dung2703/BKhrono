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