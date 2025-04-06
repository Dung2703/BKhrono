import styles from './TextInputBox.module.css'
import { addCourse } from '@/app/utils/actions'
interface TextInputBoxProps {
  setCourses: (course_ids: string[]) => void;
}
const Input = ({setCourses} : TextInputBoxProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const course_ids = addCourse(event.target.value);
    setCourses([...course_ids]);
  }

  return (
    <textarea
      placeholder={` 
0. Open myBK and navigate to section 12 (Đăng ký môn học) 
1. Choose the appropriate registration session
2. Find the course you want to register for and click on it
3. When the list of available classes appears, press Ctrl + A to select all, then Ctrl + C to copy the data
4. Paste the copied data into this box
5. Repeat the process for all courses you wish to register for (Check the list of Course IDs on the left to ensure all courses are added)
6. Click "Result" to proceed to the result page
7. Select your preferred timeslots for classes
8. Click "Generate" to generate the timetable
9. If you’re not satisfied with the result, click "Generate" again to generate a new timetable

Note: 
Refresh the page will remove any inputed data`.trim()}
      onChange={handleInputChange}
      className={styles.container}
    />
  )
}

export default Input
