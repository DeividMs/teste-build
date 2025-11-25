import React from 'react'
import './styles.css'
import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Site - OAB/SC',
    template: '%s - OAB/SC',
  },
  description: 'Site Oficial da OAB/SC.',
  openGraph: {
    title: 'Site Oficial da OAB/SC.',
    description:
      'Informações, serviços e novidades da Ordem dos Advogados do Brasil - Seccional Santa Catarina.',
    siteName: 'OAB Santa Catarina',
    locale: 'pt_BR',
    type: 'website',
    url: 'https://www.oab-sc.org.br',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Logo OAB/SC',
      },
    ],
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.oab-sc.org.br',
  },
}

export const viewport: Viewport = {
  themeColor: '#F2F3F7',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="pt-BR">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
