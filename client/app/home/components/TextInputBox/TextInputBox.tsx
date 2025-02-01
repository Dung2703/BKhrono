import React, { useState } from 'react'
import { saveAs } from 'file-saver'
import { Volkhov } from 'next/font/google'
import styles from './TextInputBox.module.css'

interface InputProps {
  addCourse: (course: string) => void
}

const Input: React.FC<InputProps> = ({ addCourse }) => {
  const [newCourse, setNewCourse] = useState('')
  const [allPastedText, setAllPastedText] = useState('')

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = event.clipboardData.getData('text')
    addCourse(pasteData)
    setAllPastedText((prevText) => prevText ? prevText + '\n' + pasteData : pasteData)
    setNewCourse('')
    event.preventDefault()
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    <input
      type="text"
      placeholder="Paste each course here"
      value={newCourse}
      onChange={handleInputChange}
      onPaste={handlePaste}
      className={styles.container}
    />
  )
}

export default Input