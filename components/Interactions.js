'use client'
import { useEffect } from 'react'

export default function Interactions() {
  useEffect(() => {
    // Enable JS-gated reveal animations
    document.documentElement.classList.add('js')

    // ---- Build Charleston fanlight (radiating spokes + concentric arcs) ----
    const fan = document.getElementById('haFan')
    if (fan) {
      ;[58, 92, 128].forEach(function (w, i) {
        const arc = document.createElement('div')
        arc.className = 'arc'
        arc.style.width = w + '%'
        arc.style.aspectRatio = '1'
        arc.style.opacity = (0.5 - i * 0.12).toFixed(2)
        fan.appendChild(arc)
      })
      const spokes = 19
      for (let s = 0; s < spokes; s++) {
        const t = s / (spokes - 1)
        const deg = -84 + t * 168
        const sp = document.createElement('div')
        sp.className = 'spoke'
        const center = 1 - Math.abs(deg) / 90
        sp.style.height = (62 + center * 30) + '%'
        sp.style.opacity = (0.4 + center * 0.5).toFixed(2)
        sp.style.transform = 'translateX(-50%) rotate(' + deg + 'deg)'
        fan.appendChild(sp)
      }
    }

    // ---- Sweetgrass blades along the waterline ----
    const grass = document.getElementById('haGrass')
    if (grass) {
      const blades = 44
      for (let b = 0; b < blades; b++) {
        const bl = document.createElement('div')
        bl.className = 'blade'
        const depth = Math.random()
        bl.style.left = (b / blades) * 100 + (Math.random() * 2 - 1) + '%'
        bl.style.height = (16 + depth * 44) + 'px'
        bl.style.opacity = (0.45 + depth * 0.5).toFixed(2)
        bl.style.transform = 'rotate(' + ((Math.random() * 2 - 1) * 12) + 'deg)'
        grass.appendChild(bl)
      }
    }

    // ---- Scroll reveal ----
    const reveals = Array.from(document.querySelectorAll('.reveal'))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      reveals.forEach(el => el.classList.add('in'))
    } else {
      let scheduled = false
      const checkReveals = () => {
        const vh = window.innerHeight || document.documentElement.clientHeight
        for (let i = reveals.length - 1; i >= 0; i--) {
          const el = reveals[i]
          const r = el.getBoundingClientRect()
          if (r.top < vh * 0.92 && r.bottom > 0) {
            el.classList.add('in')
            reveals.splice(i, 1)
          }
        }
      }
      const onScroll = () => {
        if (scheduled) return
        scheduled = true
        requestAnimationFrame(() => { scheduled = false; checkReveals() })
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll, { passive: true })
      checkReveals()
      setTimeout(checkReveals, 120)
      setTimeout(checkReveals, 500)
      // Failsafe: never leave content invisible
      const safetyTimer = setTimeout(() => {
        reveals.forEach(el => el.classList.add('in'))
      }, 2500)

      // ---- Moon parallax ----
      const moon = document.querySelector('.hero-art .moon-lg')
      let onMoonScroll
      if (moon) {
        onMoonScroll = () => {
          const y = window.scrollY
          if (y < 900) moon.style.transform = 'translateY(' + (y * 0.04) + 'px)'
        }
        window.addEventListener('scroll', onMoonScroll, { passive: true })
      }

      // ---- FAQ accordion ----
      const items = Array.from(document.querySelectorAll('.faq-item'))
      const faqListeners = []
      items.forEach(item => {
        const q = item.querySelector('.faq-q')
        const a = item.querySelector('.faq-a')
        const handler = () => {
          const isOpen = item.classList.contains('open')
          items.forEach(other => {
            other.classList.remove('open')
            const oa = other.querySelector('.faq-a')
            if (oa) oa.style.maxHeight = null
          })
          if (!isOpen) {
            item.classList.add('open')
            a.style.maxHeight = a.scrollHeight + 'px'
          }
        }
        q.addEventListener('click', handler)
        faqListeners.push({ q, handler })
      })
      const onFaqResize = () => {
        const open = document.querySelector('.faq-item.open .faq-a')
        if (open) open.style.maxHeight = open.scrollHeight + 'px'
      }
      window.addEventListener('resize', onFaqResize)

      return () => {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
        window.removeEventListener('resize', onFaqResize)
        if (onMoonScroll) window.removeEventListener('scroll', onMoonScroll)
        clearTimeout(safetyTimer)
        faqListeners.forEach(({ q, handler }) => q.removeEventListener('click', handler))
        document.documentElement.classList.remove('js')
      }
    }
  }, [])

  return null
}
