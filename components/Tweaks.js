'use client'
import { useEffect } from 'react'
import { useTweaks, TweaksPanel, TweakSection, TweakSelect, TweakColor, TweakRadio } from './TweaksPanel'

const FONT_MAP = {
  'Playfair Display': '"Playfair Display", Georgia, serif',
  'Cormorant Garamond': '"Cormorant Garamond", Georgia, serif',
  'DM Serif Display': '"DM Serif Display", Georgia, serif',
  'Libre Franklin': '"Libre Franklin", system-ui, sans-serif',
  'Source Sans 3': '"Source Sans 3", system-ui, sans-serif',
  'Mulish': '"Mulish", system-ui, sans-serif',
}

const PALETTES = {
  'Sunset Coral':  ['#C8593A', '#B44A2E', '#C9901A'],
  'Jessamine Gold': ['#C9901A', '#B57E10', '#C8593A'],
  'Indigo & Gold': ['#1A3360', '#12264A', '#C9901A'],
  'Marsh Sage':    ['#6F7660', '#586049', '#C9901A'],
}

const MT_DEFAULTS = {
  headline: 'Playfair Display',
  body: 'Libre Franklin',
  palette: ['#C8593A', '#B44A2E', '#C9901A'],
  texture: 'medium',
}

function applyTokens(t) {
  const root = document.documentElement
  root.style.setProperty('--font-display', FONT_MAP[t.headline] || FONT_MAP['Playfair Display'])
  root.style.setProperty('--font-body', FONT_MAP[t.body] || FONT_MAP['Libre Franklin'])
  const p = Array.isArray(t.palette) ? t.palette : PALETTES['Sunset Coral']
  root.style.setProperty('--accent', p[0])
  root.style.setProperty('--accent-strong', p[1])
  root.style.setProperty('--highlight', p[2])
  root.setAttribute('data-texture', t.texture || 'medium')
}

function MTTweaks() {
  const [t, setTweak] = useTweaks(MT_DEFAULTS)

  useEffect(() => { applyTokens(t) }, [t])

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Typography" />
      <TweakSelect
        label="Headline"
        value={t.headline}
        options={['Playfair Display', 'Cormorant Garamond', 'DM Serif Display']}
        onChange={(v) => setTweak('headline', v)}
      />
      <TweakSelect
        label="Body"
        value={t.body}
        options={['Libre Franklin', 'Source Sans 3', 'Mulish']}
        onChange={(v) => setTweak('body', v)}
      />
      <TweakSection label="Accent palette" />
      <TweakColor
        label="Color"
        value={t.palette}
        options={Object.values(PALETTES)}
        onChange={(v) => setTweak('palette', v)}
      />
      <TweakSection label="Texture & ornament" />
      <TweakRadio
        label="Richness"
        value={t.texture}
        options={['subtle', 'medium', 'rich']}
        onChange={(v) => setTweak('texture', v)}
      />
    </TweaksPanel>
  )
}

export default MTTweaks
