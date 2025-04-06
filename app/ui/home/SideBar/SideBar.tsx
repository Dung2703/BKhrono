import styles from './SideBar.module.css'
import { removeCourse } from '@/app/utils/actions';

interface SideBarProps {
  courses: string[];
  setCourses: (courses: string[]) => void;
}

const SideBar = ({courses, setCourses} : SideBarProps) => {
  const handleRemoveCourse = (course: string) => {
    setCourses(courses.filter((c) => c !== course));
    removeCourse(course); // Call the removeCourse function to update the global state
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>Courses</div>
      <div className={styles.divider}></div>
      <div className={styles.body}>
        <ul className={styles.list}>
          {courses.map((course, index) => (
            <li key={index} className={styles.item} onClick={(course) => handleRemoveCourse(course.currentTarget.innerText)}>
              {course}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar