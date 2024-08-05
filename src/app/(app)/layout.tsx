import '../../../globals.css'
import { Navigation } from '../components/Navigation'
import { LanguageProvider } from '../contexts/LanguageContext'
export const metadata = {
  title: 'Cask Force',
  description:
    'Découvrez notre entreprise spécialisée dans le renouvellement de tonneaux. Nous offrons des services de restauration et de réutilisation de tonneaux pour les industries vinicole et brassicole, garantissant une qualité et une durabilité exceptionnelles. Faites confiance à notre expertise pour donner une seconde vie à vos tonneaux et optimiser vos processus de production.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const res = await fetch('http://localhost:3000/api/globals/header')
  const { navItems } = await res.json()

  return (
    <html lang="fr">
      <LanguageProvider>
        <body>
          <Navigation navigations={navItems} />
          {children}
        </body>
      </LanguageProvider>
    </html>
  )
}
