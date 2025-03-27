import styles from './SideBar.module.css'

const SideBar = ({courses} : {courses: string[]}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Courses</div>
      <div className={styles.body}>
        <ul className={styles.list}>
          {courses.map((course, index) => (
            <li key={index} className={styles.item}>
              {course}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar