import Marquee from 'react-fast-marquee'
import { Icon } from '@iconify/react'
import { cn } from '@/utils/cn'

const TestimonialsSection: React.FC = () => {
  return (
    <section id='testimonials' className='space-y-16 bg-[#151519] py-24 md:py-32 xl:py-40'>
      <div className='container'>
        <div className='mx-auto w-full max-w-[900px] space-y-4'>
          <h2 className='text-left md:text-center'>Loved By Developers Building At Scale</h2>
          <p className='w-full max-w-xl text-xs/[17px] text-[#CACAD6] md:mx-auto md:text-center md:text-[15px]/[21px] xl:text-lg/[25px]'>
            We take everything that slows Solana apps down — and remove it. Then we add the tools
            you always wanted but never got.
          </p>
        </div>
      </div>

      <div className='relative'>
        <div className='absolute top-0 bottom-0 left-0 z-10 w-20 bg-linear-to-r from-[#151519] to-transparent md:w-40 xl:w-80' />
        <div className='absolute top-0 right-0 bottom-0 z-10 w-20 bg-linear-to-l from-[#1B1B1F] to-transparent md:w-40 xl:w-80' />

        <Marquee autoFill pauseOnHover>
          <div className='mr-4 flex gap-4'>
            <Testimonial
              className='max-w-[390px] md:max-w-md xl:max-w-xl'
              name='Ava Sterling'
              role='CTO'
              company='Quantum Leap Technologies'
              description='Catalyx transformed our development process. Their tools are intuitive, powerful, and have significantly cut down our development time. Highly recommended!'
            />
          </div>
        </Marquee>

        <Marquee autoFill direction='right' pauseOnHover className='mt-4'>
          <div className='mr-4 flex gap-4'>
            <Testimonial
              className='max-w-[390px] md:max-w-md xl:max-w-xl'
              name='Ava Sterling'
              role='CTO'
              company='Quantum Leap Technologies'
              description='Catalyx transformed our development process. Their tools are intuitive, powerful, and have significantly cut down our development time. Highly recommended!'
            />
          </div>
        </Marquee>
      </div>
    </section>
  )
}

type TestimonialProps = {
  className?: string
  stars?: number
  name: string
  role: string
  company: string
  description: string
}

const Testimonial: React.FC<TestimonialProps> = ({
  className,
  stars = 5,
  name,
  role,
  company,
  description,
}) => {
  return (
    <div
      className={cn(
        'space-y-4 rounded-3xl border border-[#363643] bg-[#292930] p-5 md:space-y-5 md:p-[26px] xl:space-y-6 xl:p-8',
        className,
      )}
    >
      <div className='flex gap-1 xl:gap-1.5'>
        {Array(stars)
          .fill(0)
          .map((_, idx) => (
            <Icon
              icon='bitcoin-icons:star-filled'
              className='text-sm text-[#FFDA85] md:text-[7px] xl:text-xl'
              key={idx}
            />
          ))}
      </div>

      <div className='flex items-center gap-3 md:gap-4 xl:gap-5'>
        <div className='size-10 rounded-full bg-[#E5E7EC] md:size-[50px] xl:size-[60px]' />

        <div className='space-y-0.5'>
          <h5 className='text-sm/[18px] font-bold text-[#E8E8E8] md:text-[17px]/[21px] xl:text-xl/[26px]'>
            {name}
          </h5>
          <p className='text-[10px]/[16px] text-[#4C756C] md:text-xs/[19px] xl:text-sm/[22px]'>
            {role} of {company}
          </p>
        </div>
      </div>

      <p className='text-[10px]/[18px] font-medium text-[#CACAD6] md:text-[13px]/[22px] xl:text-base/[26px]'>
        {description}
      </p>
    </div>
  )
}

export default TestimonialsSection
