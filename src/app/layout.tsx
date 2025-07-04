import '../styles/globals.css'

import type { Metadata } from 'next'

import AppConfig from '@/config/AppConfig'

export const metadata: Metadata = {
  title: AppConfig.APP_NAME,
  description: AppConfig.APP_DESCRIPTION,
  icons: {
    icon: AppConfig.ICON_PATH,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={AppConfig.DEFAULT_LANGUAGE}>
      <body className='antialiased bg-backgroundColor'>{children}</body>
    </html>
  )
}
