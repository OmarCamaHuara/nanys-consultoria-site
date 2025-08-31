import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Nany's Consultoria - RNM",
  description: 'Te ayudamos a realizar todos tus trámites en la Policía Federal de forma rápida y segura.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
