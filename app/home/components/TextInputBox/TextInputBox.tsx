import { saveAs } from 'file-saver'
import styles from './TextInputBox.module.css'
import { setClassesArrays } from '@/app/utils/actions'
interface TextInputBoxProps {
  setCourses: (course_ids: string[]) => void;
}
const Input = ({setCourses} : TextInputBoxProps) => {
  // const [allPastedText, setAllPastedText] = useState('')

  // const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
  //   const pasteData = event.clipboardData.getData('text')
  //   addCourse(pasteData)
  //   setAllPastedText((prevText) => (prevText ? prevText + '\n' + pasteData : pasteData))
  //   setNewCourse('')
  //   event.preventDefault()
  // }

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const course_ids = setClassesArrays(event.target.value);
    setCourses([...course_ids]);
  }

  // const handleAddCourse = () => {
  //   addCourse(newCourse)
  //   setNewCourse('')
  // }

  // const saveTextToFile = () => {
  //   const blob = new Blob([allPastedText], { type: 'text/plain;charset=utf-8' })
  //   saveAs(blob, 'pastedText.txt')
  // }

  return (
    <textarea
      placeholder="Paste course data"
      onChange={handleInputChange}
      className={styles.container}
    />
  )
}

export default Input
