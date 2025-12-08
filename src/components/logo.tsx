import Image from 'next/image'
import LogoImage from '@/assets/images/logo.png'
import { cn } from '@/utils/cn'

type Props = {
  className?: string
}

const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex w-fit items-center gap-2', className)}>
      <Image src={LogoImage} alt='' className='h-4.5 w-fit' />
      <p className='text-lg/[18px] font-bold'>Catalyx</p>
    </div>
  )
}

export default Logo
