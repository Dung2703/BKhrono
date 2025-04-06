"use client";
import React, { useState } from 'react'
import styles from './PriorityBar.module.css'
import { useSchedulePriorityProps } from '@/app/utils/types'

const PriorityBar = ({schedulePriority, setSchedulePriority} : useSchedulePriorityProps) => {
  const dates = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
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
      case 'Mo':
        updateArray(monday, setMonday)
        break
      case 'Tu':
        updateArray(tuesday, setTuesday)
        break
      case 'We':
        updateArray(wednesday, setWednesday)
        break
      case 'Th':
        updateArray(thursday, setThursday)
        break
      case 'Fr':
        updateArray(friday, setFriday)
        break
      case 'Sa':
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
      case 'Mo':
        return monday.includes(time)
      case 'Tu':
        return tuesday.includes(time)
      case 'We':
        return wednesday.includes(time)
      case 'Th':
        return thursday.includes(time)
      case 'Fr':
        return friday.includes(time)
      case 'Sa':
        return saturday.includes(time)
      default:
        return false
    }
  }

  const updateLayoutDay = (day : string) => {
    switch (day) {
      case 'Mo':
        if (monday.length > 0) {
          return true
        }
        return false
      case 'Tu':
        if (tuesday.length > 0) {
          return true
        }
        return false
      case 'We':
        if (wednesday.length > 0) {
          return true
        }
        return false
      case 'Th':
        if (thursday.length > 0) {
          return true
        }
        return false
      case 'Fr':
        if (friday.length > 0) {
          return true
        }
        return false
      case 'Sa':
        if (saturday.length > 0) {
          return true
        }
        return false
    }
  }

  return (
    <div className={styles.container}>
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
  )
}

export default PriorityBar