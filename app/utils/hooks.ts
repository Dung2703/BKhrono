import { useState } from 'react'

export const useSchedulePriority = () => {
  const [monday, setMonday] = useState<string[]>([])
  const [tuesday, setTuesday] = useState<string[]>([])
  const [wednesday, setWednesday] = useState<string[]>([])
  const [thursday, setThursday] = useState<string[]>([])
  const [friday, setFriday] = useState<string[]>([])
  const [saturday, setSaturday] = useState<string[]>([])

  return {
    schedulePriority: { monday, tuesday, wednesday, thursday, friday, saturday },
    setSchedulePriority: { setMonday, setTuesday, setWednesday, setThursday, setFriday, setSaturday },
  }
}