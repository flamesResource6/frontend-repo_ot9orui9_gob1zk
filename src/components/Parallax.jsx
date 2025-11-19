import { useEffect, useRef } from 'react'

export default function Parallax({ children, speed = 0.2, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const onScroll = () => {
      const y = window.scrollY
      el.style.transform = `translate3d(0, ${y * speed}px, 0)`
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
