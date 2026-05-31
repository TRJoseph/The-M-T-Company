import './globals.css'

export const metadata = {
  title: 'The M&T Company — Automation for local businesses',
  description: 'A two-person automation studio in the South Carolina Lowcountry. We take the busywork off your plate so you can get back to the work only you can do.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Libre+Franklin:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,600&family=DM+Serif+Display:ital@0;1&family=Source+Sans+3:wght@400;500;600&family=Mulish:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
