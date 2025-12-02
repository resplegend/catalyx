import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import AirtableLogo from '@/assets/images/airtable.png'
import CoinbaseLogo from '@/assets/images/coinbase.png'
import FiberplanLogo from '@/assets/images/fiberplane.png'
import HelpScoutLogo from '@/assets/images/help_scout.png'
import MailchimpLogo from '@/assets/images/mailchimp.png'

const LogoWallSection: React.FC = () => {
  return (
    <section id='logoWall' className='space-y-6 py-16 md:pt-24 md:pb-32'>
      <div className='container'>
        <h3 className='text-[42px]/[50px] text-[#CACAD6] md:text-5xl/[60px]'>
          Big Companies Choose Us
          <br />
          <b className='text-white'>
            <i>Will You Do The Same?</i>
          </b>
        </h3>
      </div>

      <div className='relative py-6'>
        <div className='absolute top-0 bottom-0 left-0 z-10 w-20 bg-linear-to-r from-[#1B1B1F] to-transparent md:w-40 xl:w-80' />
        <div className='absolute top-0 right-0 bottom-0 z-10 w-20 bg-linear-to-l from-[#1B1B1F] to-transparent md:w-40 xl:w-80' />

        <Marquee autoFill>
          <div className='mr-6 flex items-center gap-6 md:mr-12 md:gap-12 xl:mr-20 xl:gap-20'>
            <Image src={MailchimpLogo} alt='' className='h-6 w-fit md:h-8 xl:h-10' />
            <Image src={AirtableLogo} alt='' className='h-6 w-fit md:h-8 xl:h-10' />
            <Image src={CoinbaseLogo} alt='' className='h-[21.6px] w-fit md:h-[28.8px] xl:h-9' />
            <Image src={HelpScoutLogo} alt='' className='h-6 w-fit md:h-8 xl:h-10' />
            <Image src={FiberplanLogo} alt='' className='h-6 w-fit md:h-8 xl:h-10' />
          </div>
        </Marquee>
      </div>
    </section>
  )
}

export default LogoWallSection
