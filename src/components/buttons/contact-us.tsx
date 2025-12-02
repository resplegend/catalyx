import Image from 'next/image'
import NodesIcon from '@/assets/images/nodes.png'
import { cn } from '@/utils/cn'

type Props = {
  className?: string
}

const ContactUsButton: React.FC<Props> = ({ className }) => {
  return (
    <button
      className={cn('bg-purple flex h-11 w-fit items-center gap-1.5 rounded-lg px-7', className)}
    >
      <p>Contact Us</p>
      <Image src={NodesIcon} alt='' className='size-4.5' />
    </button>
  )
}

export default ContactUsButton
