"use client";
import React, { useState } from 'react'
import styles from './PriorityBar.module.css'

const PriorityBar = () => {
  const dates = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7',]
  const times = ['2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', '9-10', '10-11', '11-12', '12-13', '13-14',]
  const [currentDate, setCurrentDate] = useState<string>('')
  const [monday, setMonday] = useState<string[]>([])
  const [tuesday, setTuesday] = useState<string[]>([])
  const [wednesday, setWednesday] = useState<string[]>([])
  const [thursday, setThursday] = useState<string[]>([])
  const [friday, setFriday] = useState<string[]>([])
  const [saturday, setSaturday] = useState<string[]>([])
  // const [sunday, setSunday] = useState<string[]>([])

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
      // case 'CN':
      //   updateArray(sunday, setSunday)
      //   break
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
      // case 'CN':
      //   return sunday.includes(time)
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
      // case 'CN':
      //   if (sunday.length > 0) {
      //     return true
      //   }
      //   return false
    }
  }

  return (
    <div className={styles.container}>
      {/* <div className={styles.top}>
        <button>Prior</button>
      </div> */}
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
                  setCurrentDate(date)
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