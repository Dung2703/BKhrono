import React, { useState } from 'react'
import { saveAs } from 'file-saver'
import styles from './TextInputBox.module.css'
import { getClassesList } from '@/app/utils/formatInputData'

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
