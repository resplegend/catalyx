import Link from 'next/link'
import { Icon } from '@iconify/react'
import ContactUsButton from '../buttons/contact-us'

const HeroSection: React.FC = () => {
  return (
    <section id='hero' className='py-4'>
      <div className='container-main'>
        <div className='relative overflow-hidden rounded-3xl bg-white px-2.5 pt-32 pb-80 md:pt-44 md:pb-90 xl:pt-60 xl:pb-[400px]'>
          <div className='relative z-10 space-y-6'>
            <div className='flex items-center justify-center gap-6'>
              <div className='flex h-9 items-center gap-2 rounded-full bg-[#D8CCFF] px-3.5'>
                <Icon
                  icon='bitcoin-icons:node-3-connections-filled'
                  className='text-purple text-lg'
                />
                <p className='text-purple text-sm/[21px] font-light'>Welcome to Catalyx</p>
              </div>

              <div className='hidden items-center gap-1.5 md:flex'>
                <div className='flex -space-x-[7px]'>
                  {Array(3)
                    .fill(0)
                    .map((_, idx) => (
                      <div
                        className='size-7 rounded-full border border-white bg-[#E4E4E4]'
                        key={idx}
                      />
                    ))}
                </div>

                <div className='flex items-center gap-2'>
                  <p className='text-primary text-xl/[30px] font-bold'>1,182</p>
                  <p className='text-primary text-sm/[21px] font-light'>
                    Solo developers building the future of crypto
                  </p>
                </div>
              </div>
            </div>

            <div className='mx-auto w-full max-w-[900px] space-y-4'>
              <h1 className='text-primary md:[57px]/[57px] text-center text-[42px]/[42px] font-medium xl:text-7xl'>
                The Supernode Built For Real Builders
              </h1>
              <p className='mx-auto w-full max-w-xl text-center text-base/[22px] text-[#5A5A6E] md:text-[17px]/[23px] xl:text-lg/[25px]'>
                Faster confirmations, richer history, cleaner logging — everything your Solana node
                should’ve been.
              </p>
            </div>

            <div className='space-y-6'>
              <div className='flex justify-center gap-4'>
                <ContactUsButton className='border-[1.5px] border-black/10 bg-[#181E2B] px-[22px] md:px-[25px] xl:px-7' />

                <button className='text-primary flex h-11 items-center rounded-lg border-[1.5px] border-[#D8CCFF] px-[22px] text-sm md:px-[25px] md:text-base xl:px-7'>
                  <p>Watch 1-Min Intro</p>
                </button>
              </div>

              <div className='mx-auto flex w-fit items-center gap-3'>
                <p className='text-[#9D9DAF]'>Have a question? </p>
                <Link href='#' className='font-bold text-[#8FC1B4]'>
                  Whitepaper →
                </Link>
              </div>
            </div>
          </div>

          <video
            className='absolute -bottom-1/5 left-1/2 w-xl max-w-none -translate-x-1/2 md:-bottom-1/4 md:w-2xl xl:w-3xl'
            autoPlay
            loop
            muted
          >
            <source src='/videos/hero.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
