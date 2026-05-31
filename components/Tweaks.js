'use client'
import { useEffect } from 'react'
import { useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio } from './TweaksPanel'

const TWEAK_DEFAULTS = {
  accent: '#1B5080',
  warmth: 'warm',
  radius: 'soft',
  headFont: 'expressive',
}

const WARMTH = {
  warm: { '--bg': '#FAF8F3', '--surface-2': '#F3EEE5', '--line': '#E7E0D3', '--line-soft': '#EFE9DD' },
  cool: { '--bg': '#F6F8F9', '--surface-2': '#EDF1F3', '--line': '#E1E6EA', '--line-soft': '#EBEFF2' },
  cream: { '--bg': '#F8F3E8', '--surface-2': '#F0E8D6', '--line': '#E6DCC4', '--line-soft': '#EFE7D6' },
}
const RADIUS = {
  sharp: { '--radius': '8px', '--radius-sm': '6px', '--radius-lg': '12px' },
  soft: { '--radius': '18px', '--radius-sm': '12px', '--radius-lg': '28px' },
  round: { '--radius': '26px', '--radius-sm': '16px', '--radius-lg': '40px' },
}
const HEADFONT = {
  expressive: '"Bricolage Grotesque", "Hanken Grotesk", sans-serif',
  clean: '"Hanken Grotesk", system-ui, sans-serif',
}

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS)

  useEffect(() => {
    const root = document.documentElement.style
    root.setProperty('--accent', t.accent)
    const w = WARMTH[t.warmth] || WARMTH.warm
    Object.entries(w).forEach(([k, v]) => root.setProperty(k, v))
    const r = RADIUS[t.radius] || RADIUS.soft
    Object.entries(r).forEach(([k, v]) => root.setProperty(k, v))
    root.setProperty('--ff-display', HEADFONT[t.headFont] || HEADFONT.expressive)
  }, [t.accent, t.warmth, t.radius, t.headFont])

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Brand accent" />
      <TweakColor
        label="Accent color"
        value={t.accent}
        options={['#2F6F5F', '#C06A43', '#355FB0', '#6B5BD6']}
        onChange={(v) => setTweak('accent', v)}
      />
      <TweakSection label="Feel" />
      <TweakRadio
        label="Paper tone"
        value={t.warmth}
        options={['warm', 'cool', 'cream']}
        onChange={(v) => setTweak('warmth', v)}
      />
      <TweakRadio
        label="Corners"
        value={t.radius}
        options={['sharp', 'soft', 'round']}
        onChange={(v) => setTweak('radius', v)}
      />
      <TweakSection label="Type" />
      <TweakRadio
        label="Headlines"
        value={t.headFont}
        options={['expressive', 'clean']}
        onChange={(v) => setTweak('headFont', v)}
      />
    </TweaksPanel>
  )
}

export default TweaksApp
