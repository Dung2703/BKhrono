"use client";
import React, { useState } from 'react'
import styles from './PriorityBar.module.css'

interface PriorityBarProps {
  schedulePriority: {
    monday: string[],
    tuesday: string[],
    wednesday: string[],
    thursday: string[],
    friday: string[],
    saturday: string[]
  },
  setSchedulePriority: {
    setMonday: React.Dispatch<React.SetStateAction<string[]>>,
    setTuesday: React.Dispatch<React.SetStateAction<string[]>>,
    setWednesday: React.Dispatch<React.SetStateAction<string[]>>,
    setThursday: React.Dispatch<React.SetStateAction<string[]>>,
    setFriday: React.Dispatch<React.SetStateAction<string[]>>,
    setSaturday: React.Dispatch<React.SetStateAction<string[]>>
  }
}

const PriorityBar = ({schedulePriority, setSchedulePriority} : PriorityBarProps) => {
  const dates = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const times = ['7-8h', '8-9h', '9-10h', '10-11h', '11-12h', '12-13h', '13-14h', '14-15h', '15-16h', '16-17h', '17-18h', '18-19h'];
  const [currentDate, setCurrentDate] = useState<string>('');
  const { monday, tuesday, wednesday, thursday, friday, saturday } = schedulePriority;
  const { setMonday, setTuesday, setWednesday, setThursday, setFriday, setSaturday } = setSchedulePriority;

  const addTime = (time: string) => {
    if (!currentDate) {
      return
    }

    const updateArray = (array: string[], setArray: React.Dispatch<React.SetStateAction<string[]>>) => {
      if (array.includes(time)) {
        setArray(array.filter((t) => t !== time))
      } else {
        setArray([...array, time])
      }
    }

    switch (currentDate) {
      case 'T2':
        updateArray(monday, setMonday)
        break
      case 'T3':
        updateArray(tuesday, setTuesday)
        break
      case 'T4':
        updateArray(wednesday, setWednesday)
        break
      case 'T5':
        updateArray(thursday, setThursday)
        break
      case 'T6':
        updateArray(friday, setFriday)
        break
      case 'T7':
        updateArray(saturday, setSaturday)
        break
    }
  }

  // Check if the time exists in the current day's array
  const checkExistTime = (time: string): boolean => {
    if (!currentDate) {
      return false
    }

    switch (currentDate) {
      case 'T2':
        return monday.includes(time)
      case 'T3':
        return tuesday.includes(time)
      case 'T4':
        return wednesday.includes(time)
      case 'T5':
        return thursday.includes(time)
      case 'T6':
        return friday.includes(time)
      case 'T7':
        return saturday.includes(time)
      default:
        return false
    }
  }

  const updateLayoutDay = (day : string) => {
    switch (day) {
      case 'T2':
        if (monday.length > 0) {
          return true
        }
        return false
      case 'T3':
        if (tuesday.length > 0) {
          return true
        }
        return false
      case 'T4':
        if (wednesday.length > 0) {
          return true
        }
        return false
      case 'T5':
        if (thursday.length > 0) {
          return true
        }
        return false
      case 'T6':
        if (friday.length > 0) {
          return true
        }
        return false
      case 'T7':
        if (saturday.length > 0) {
          return true
        }
        return false
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.bottom}>
        <div className={styles.date}>
          {
            dates.map((date, index) => (
              <button 
              key={index} 
              className={`${styles.date} 
              ${currentDate === date ? styles.activeDate : ''}
              ${updateLayoutDay(date) ? styles.chosenDate : ''}`}
              onClick={() => {
                  if (currentDate === date) setCurrentDate('')
                  else setCurrentDate(date)
                }
              }
              >{date}
              </button>
            ))
          }
        </div>
        <div className={styles.time}>
          {
            times.map((time, index) => (
              <button 
              key={index} 
              className={`${styles.hour} 
              ${checkExistTime(time) ? styles.activeTime : ''}`}
              onClick={() => {
                  addTime(time)
                }
              }
              >{time}
              </button>
            ))
          }
        </div>
      </div>
      {/* <div className={styles.top}></div> */}
    </div>
  )
}

export default PriorityBar