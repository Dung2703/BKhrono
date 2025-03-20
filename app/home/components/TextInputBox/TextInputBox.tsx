import React, { useState } from 'react'
import { saveAs } from 'file-saver'
import styles from './TextInputBox.module.css'
import { getClassesList, parseClassString } from '@/app/utils/formatInputData'

//Arrays to be processed further
const nonLabArray: any[] = []
const LabArray: any[] = []

interface InputProps {
  addCourse: (course: string) => void
}

const Input: React.FC<InputProps> = ({ addCourse }) => {
  const [newCourse, setNewCourse] = useState('')
  const [allPastedText, setAllPastedText] = useState('')

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const pasteData = event.clipboardData.getData('text')
    addCourse(pasteData)
    setAllPastedText((prevText) => (prevText ? prevText + '\n' + pasteData : pasteData))
    setNewCourse('')
    event.preventDefault()
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const data: string[] = getClassesList(event.target.value)
    console.log("String", data);
    // Parse each class string and separate into non-lab and lab arrays
    data.forEach((classStr: string) => {
      const parsedClasses = parseClassString(classStr); // Parse the class string into objects
      parsedClasses.forEach((classObj: any) => {
        if (classObj.type === "non-lab") {
          nonLabArray.push(classObj); // Add to non-lab array
        } else if (classObj.type === "lab") {
          LabArray.push(classObj); // Add to lab array
        }
      });
    });

    console.log("Non-Lab Array:", nonLabArray);
    console.log("Lab Array:", LabArray);

    setNewCourse(event.target.value)
  }

  const handleAddCourse = () => {
    addCourse(newCourse)
    setNewCourse('')
  }

  const saveTextToFile = () => {
    const blob = new Blob([allPastedText], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, 'pastedText.txt')
  }

  return (
    <textarea
      placeholder="Paste course data"
      value={newCourse}
      onChange={handleInputChange}
      className={styles.container}
    />
  )
}

export default Input
