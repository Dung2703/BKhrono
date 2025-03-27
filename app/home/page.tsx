"use client";
import { useState } from "react";
import styles from "./page.module.css";
import SideBar from "@/app/ui/home/SideBar/SideBar";
import TextInputBox from "@/app/ui/home/TextInputBox/TextInputBox";

const HomePage = () => {
  const [courses, setCourses] = useState<string[]>([]);
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar courses={courses}/>
      </div>
      <div className={styles.inputSection}>
        <TextInputBox setCourses={setCourses}/>
      </div>
    </div>
  );
};

export default HomePage;
