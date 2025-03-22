import { useState } from 'react'

export const useWeeklySchedule = () => {
  const [monday, setMonday] = useState<string[]>([])
  const [tuesday, setTuesday] = useState<string[]>([])
  const [wednesday, setWednesday] = useState<string[]>([])
  const [thursday, setThursday] = useState<string[]>([])
  const [friday, setFriday] = useState<string[]>([])
  const [saturday, setSaturday] = useState<string[]>([])

  return {
    schedule: { monday, tuesday, wednesday, thursday, friday, saturday },
    setters: { setMonday, setTuesday, setWednesday, setThursday, setFriday, setSaturday },
  }
}