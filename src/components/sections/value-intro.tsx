import { cn } from '@/utils/cn'

type Props = {
  className?: string
}

const ValueIntroSection: React.FC<Props> = ({ className }) => {
  return (
    <section id='valueIntro' className={cn('pt-16 md:pt-24 xl:py-32', className)}>
      <div className='container'>
        <p className='text-[28px]/[34px] font-medium text-[#CACAD6] md:text-[38px]/[47px] xl:text-5xl/[60px]'>
          Traditional RPC Nodes Give You Access. <br className='hidden md:block' />
          <b className='text-white'>
            <i>
              Catalyx Gives You <u className='text-[#8FC1B4]'>Superpowers.</u>
            </i>
          </b>
        </p>
      </div>
    </section>
  )
}

export default ValueIntroSection
