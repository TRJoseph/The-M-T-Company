'use client'
import { useEffect } from 'react'

export default function Interactions() {
  useEffect(() => {
    // Sticky nav shadow
    const nav = document.getElementById('nav')
    function onNavScroll() {
      if (window.scrollY > 8) nav.classList.add('scrolled')
      else nav.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onNavScroll, { passive: true })
    onNavScroll()

    // Mobile menu
    const toggle = document.getElementById('navToggle')
    const menu = document.getElementById('mobileMenu')
    function setMenu(open) {
      toggle.classList.toggle('open', open)
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
      menu.style.display = open ? 'block' : 'none'
    }
    function onToggleClick() {
      setMenu(!toggle.classList.contains('open'))
    }
    function onMenuClick(e) {
      if (e.target.tagName === 'A') setMenu(false)
    }
    toggle.addEventListener('click', onToggleClick)
    menu.addEventListener('click', onMenuClick)

    // Reveal + counters via scroll position
    const remaining = Array.from(document.querySelectorAll('.reveal'))
    const counters = Array.from(document.querySelectorAll('[data-count]'))
    const started = {}

    function finalCount(el) {
      el.innerHTML = el.getAttribute('data-count') + '<span class="u">' + (el.getAttribute('data-suffix') || '') + '</span>'
    }
    function animateCount(el, key) {
      if (started[key]) return
      started[key] = true
      if (document.hidden) { finalCount(el); return }
      const target = parseFloat(el.getAttribute('data-count'))
      const suffix = el.getAttribute('data-suffix') || ''
      const dur = 1300
      let start = null
      function frame(ts) {
        if (!start) start = ts
        const p = Math.min((ts - start) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        const val = Math.round(eased * target)
        el.innerHTML = val + '<span class="u">' + suffix + '</span>'
        if (p < 1) requestAnimationFrame(frame)
      }
      requestAnimationFrame(frame)
    }

    function check() {
      const vh = window.innerHeight || document.documentElement.clientHeight
      for (let i = remaining.length - 1; i >= 0; i--) {
        const el = remaining[i]
        const r = el.getBoundingClientRect()
        if (r.top < vh * 0.9 && r.bottom > 0) {
          el.classList.add('in')
          remaining.splice(i, 1)
        }
      }
      counters.forEach((el, idx) => {
        const r = el.getBoundingClientRect()
        if (r.top < vh * 0.85 && r.bottom > 0) animateCount(el, idx)
      })
    }

    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)

    function revealInstant() {
      document.documentElement.classList.add('reveal-instant')
      remaining.forEach(el => el.classList.add('in'))
      remaining.length = 0
      counters.forEach((el, idx) => animateCount(el, idx))
    }

    document.addEventListener('visibilitychange', function () { if (!document.hidden) check() })

    if (document.hidden) {
      revealInstant()
    } else {
      check()
      requestAnimationFrame(check)
      setTimeout(check, 300)
    }

    // Hard safety net: after entrance animations finish, lock in visible state
    const safetyTimer = setTimeout(() => {
      remaining.forEach(el => el.classList.add('in'))
      const vh = window.innerHeight || document.documentElement.clientHeight
      counters.forEach((el, idx) => {
        const r = el.getBoundingClientRect()
        if (r.top < vh && r.bottom > 0) { started[idx] = true; finalCount(el) }
      })
      document.documentElement.classList.add('reveal-instant')
    }, 1500)

    // FAQ accordion
    const faqItems = Array.from(document.querySelectorAll('.faq-item'))
    const faqListeners = []
    faqItems.forEach(item => {
      const q = item.querySelector('.faq-q')
      const a = item.querySelector('.faq-a')
      const handler = () => {
        const isOpen = item.classList.contains('open')
        faqItems.forEach(other => {
          other.classList.remove('open')
          other.querySelector('.faq-a').style.maxHeight = null
        })
        if (!isOpen) {
          item.classList.add('open')
          a.style.maxHeight = a.scrollHeight + 'px'
        }
      }
      q.addEventListener('click', handler)
      faqListeners.push({ q, handler })
    })
    if (faqItems.length) {
      faqItems[0].classList.add('open')
      const firstA = faqItems[0].querySelector('.faq-a')
      requestAnimationFrame(() => { firstA.style.maxHeight = firstA.scrollHeight + 'px' })
    }

    return () => {
      window.removeEventListener('scroll', onNavScroll)
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
      toggle.removeEventListener('click', onToggleClick)
      menu.removeEventListener('click', onMenuClick)
      clearTimeout(safetyTimer)
      faqListeners.forEach(({ q, handler }) => q.removeEventListener('click', handler))
    }
  }, [])

  return null
}
