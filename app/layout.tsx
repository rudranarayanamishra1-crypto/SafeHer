import React from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SafeHer - Women Safety',
  description: 'Women safety emergency SOS app with live location, evidence camera, and emergency contacts',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: "hidden" }}>{children}</body>
    </html>
  )
}
