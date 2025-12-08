'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react'
import LogoImage from '@/assets/images/logo.png'
import NodesIcon from '@/assets/images/nodes.png'
import Logo from './logo'
import Socials from './socials'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const { t } = useTranslation()

  const headerLinks = useMemo(
    () => [
      { label: t('header.about'), href: '#' },
      { label: t('header.features'), href: '#' },
      { label: t('header.blog'), href: '#' },
      { label: t('header.event'), href: '#' },
      { label: t('header.pricing'), href: '#' },
    ],
    [t],
  )

  return (
    <>
      <header className='sticky top-0 z-50 bg-[#1B1B1F]'>
        <div className='container-main flex h-20 items-center gap-4'>
          <Logo className='hidden md:flex' />

          <Image src={LogoImage} alt='' className='h-7.5 w-fit md:hidden' />

          <nav className='ml-11 hidden gap-6 md:flex'>
            {headerLinks.map((link) => (
              <Link href={link.href} className='text-sm/[14px] font-light' key={link.label}>
                {link.label}
              </Link>
            ))}
          </nav>

          <button className='bg-purple ml-auto flex h-11 items-center gap-1.5 rounded-lg px-7'>
            <p className='text-sm md:text-base'>{t('button.startForFree')}</p>
            <Image src={NodesIcon} alt='' className='hidden size-4.5 md:block' />
          </button>

          <button className='md:hidden' onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            <Icon icon={!isMobileMenuOpen ? 'material-symbols:menu-rounded' : 'material-symbols:close'} className='text-3xl' />
          </button>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className='fixed top-20 left-0 z-50 w-full space-y-8 bg-[#1B1B1F]/90 px-8 py-[50px] backdrop-blur-sm'>
          <h5 className='text-base/4 font-bold'>Catalyx</h5>

          <nav className='space-y-4'>
            {headerLinks.map((link) => (
              <Link href={link.href} className='block w-fit text-xl/[25px]' key={link.label}>
                {link.label}
              </Link>
            ))}
          </nav>

          <ul className='space-y-2'>
            <li className='text-base/5'>Terms and Conditions</li>
            <li className='text-base/5'>Terms of Use</li>
            <li className='text-base/5'>Disclosure</li>
          </ul>

          <Socials />
        </div>
      )}
    </>
  )
}

export default Header
