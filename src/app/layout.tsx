import './globals.css'
import type { Metadata } from 'next'
import { Literata } from 'next/font/google'

const inter = Literata({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Patrícia Beckmann Dentista',
  description: 'Link central para Dra. Patricia Beckmann, \
  dentista especializada em endodontia e estética dental. \
  Encontre aqui meus locais de atendimento e gende sua consulta!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-slate-200 overflow-hidden`}>{children}</body>
    </html>
  )
}
