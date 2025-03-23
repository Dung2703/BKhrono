'use client';
import { useState } from 'react';
import styles from './page.module.css';
import SideBar from './components/SideBar/SideBar';
import TextInputBox from './components/TextInputBox/TextInputBox';
import FileInputBox from './components/FileInputBox/FileInputBox';
import LogoSwitch from '../components/LogoSwitch/LogoSwitch';
import Link from 'next/link';
import Contact from '../components/Contact/Contact';

const HomePage = () => {
  const [courses, setCourses] = useState<string[]>([]);
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar courses={courses}/>
      </div>
      <div className={styles.inputSection}>
        <div className={styles.fileInputBox}>
          <FileInputBox />
        </div>
        <div className={styles.textInputBox}>
          <TextInputBox setCourses={setCourses}/>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/result">
          <button className={styles.button}>Continue</button>
        </Link>
        <Contact/>
        <LogoSwitch />
      </div>
    </div>
  );
};

export default HomePage;
