import Link from 'next/link'
import { Icon } from '@iconify/react'
import { cn } from '@/utils/cn'

type Props = {
  className?: string
}

const Socials: React.FC<Props> = ({ className }) => {
  return (
    <ul className={cn('flex w-fit gap-4 md:gap-8', className)}>
      <li>
        <Link
          href='#'
          className='flex size-9 items-center justify-center rounded-lg bg-[#262626] md:size-11'
        >
          <Icon icon='mdi:facebook' className='text-2xl text-[#33A788] md:text-[28px]' />
        </Link>
      </li>
      <li>
        <Link
          href='#'
          className='flex size-9 items-center justify-center rounded-lg bg-[#262626] md:size-11'
        >
          <Icon icon='mdi:twitter' className='text-2xl text-[#33A788] md:text-[28px]' />
        </Link>
      </li>
      <li>
        <Link
          href='#'
          className='flex size-9 items-center justify-center rounded-lg bg-[#262626] md:size-11'
        >
          <Icon icon='mdi:instagram' className='text-2xl text-[#33A788] md:text-[28px]' />
        </Link>
      </li>
    </ul>
  )
}

export default Socials
