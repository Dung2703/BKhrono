import styles from './TextInputBox.module.css'
import { setClassesArrays } from '@/app/utils/actions'
interface TextInputBoxProps {
  setCourses: (course_ids: string[]) => void;
}
const Input = ({setCourses} : TextInputBoxProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const course_ids = setClassesArrays(event.target.value);
    setCourses([...course_ids]);
  }

  return (
    <textarea
      placeholder="Paste course data"
      onChange={handleInputChange}
      className={styles.container}
    />
  )
}

export default Input
