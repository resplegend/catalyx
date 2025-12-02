'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react'
import NodesIcon from '@/assets/images/nodes.png'
import Logo from './logo'

const Header: React.FC = () => {
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
    <header>
      <div className='container-main flex h-20 items-center gap-4'>
        <Logo />

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

        <button className='md:hidden'>
          <Icon icon='material-symbols:menu-rounded' className='text-3xl' />
        </button>
      </div>
    </header>
  )
}

export default Header
