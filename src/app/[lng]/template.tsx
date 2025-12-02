import { PropsWithChildren } from 'react'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function LocaleTemplate({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
