import { useState, useEffect } from 'react'

export default function useCountdown(targetDate) {
  const [time, setTime] = useState({ days: '000', hours: '00', mins: '00', secs: '00' })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    function update() {
      const diff = target - Date.now()
      if (diff <= 0) {
        setTime({ days: '000', hours: '00', mins: '00', secs: '00' })
        return
      }
      setTime({
        days: String(Math.floor(diff / 86400000)).padStart(3, '0'),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        mins: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        secs: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      })
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return time
}