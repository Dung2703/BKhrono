"use client";
import { createContext, useContext, useState } from "react";

type CoursesContextType = {
  courses: string[];
  setCourses: React.Dispatch<React.SetStateAction<string[]>>;
};

const CoursesContext = createContext<CoursesContextType | undefined>(undefined);

export const CoursesProvider = ({ children }: { children: React.ReactNode }) => {
  const [courses, setCourses] = useState<string[]>([]);
  return (
    <CoursesContext.Provider value={{ courses, setCourses }}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCourses = () => {
  const context = useContext(CoursesContext);
  if (!context) {
    throw new Error("useCourses must be used within a CoursesProvider");
  }
  return context;
};
