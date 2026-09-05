import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function onScroll() {
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setWidth(docH > 0 ? (window.scrollY / docH) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div className="scroll-progress" style={{ width: `${width}%` }} />
}