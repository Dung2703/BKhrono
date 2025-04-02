import { useState } from 'react'

export const useSchedulePriority = () => {
  const [monday, setMonday] = useState<string[]>(['8-9h', '9-10h', '10-11h', '11-12h', '12-13h', '13-14h', '14-15h', '15-16h', '16-17h', '17-18h'])
  const [tuesday, setTuesday] = useState<string[]>(['8-9h', '9-10h', '10-11h', '11-12h', '12-13h', '13-14h', '14-15h', '15-16h', '16-17h', '17-18h'])
  const [wednesday, setWednesday] = useState<string[]>(['8-9h', '9-10h', '10-11h', '11-12h', '12-13h', '13-14h', '14-15h', '15-16h', '16-17h', '17-18h'])
  const [thursday, setThursday] = useState<string[]>(['8-9h', '9-10h', '10-11h', '11-12h', '12-13h', '13-14h', '14-15h', '15-16h', '16-17h', '17-18h'])
  const [friday, setFriday] = useState<string[]>(['8-9h', '9-10h', '10-11h', '11-12h', '12-13h', '13-14h', '14-15h', '15-16h', '16-17h', '17-18h'])
  const [saturday, setSaturday] = useState<string[]>([])

  return {
    schedulePriority: { monday, tuesday, wednesday, thursday, friday, saturday },
    setSchedulePriority: { setMonday, setTuesday, setWednesday, setThursday, setFriday, setSaturday },
  }
}