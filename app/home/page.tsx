"use client";
import styles from "./page.module.css";
import SideBar from "@/app/ui/home/SideBar/SideBar";
import TextInputBox from "@/app/ui/home/TextInputBox/TextInputBox";
import { useCourses } from "@/app/contexts/CoursesContext";

const HomePage = () => {
  const { courses, setCourses } = useCourses();

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar courses={courses} setCourses={setCourses} />
      </div>
      <div className={styles.inputSection}>
        <TextInputBox setCourses={setCourses} />
      </div>
    </div>
  );
};

export default HomePage;
