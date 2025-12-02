import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import AirtableLogo from '@/assets/images/airtable.png'
import CoinbaseLogo from '@/assets/images/coinbase.png'
import FiberplanLogo from '@/assets/images/fiberplane.png'
import HelpScoutLogo from '@/assets/images/help_scout.png'
import MailchimpLogo from '@/assets/images/mailchimp.png'

const TrustedBySection: React.FC = () => {
  return (
    <section id='trustedBy' className='py-6'>
      <div className='container mb-3'>
        <p className='text-sm font-medium text-[#68687E] md:text-center md:text-[15px] xl:text-base'>
          Used by <span className='text-purple'>124</span> crypto companies
        </p>
      </div>

      <div className='relative'>
        <div className='absolute top-0 bottom-0 left-0 z-10 w-80 bg-linear-to-r from-[#1B1B1F] to-transparent' />
        <div className='absolute top-0 right-0 bottom-0 z-10 w-80 bg-linear-to-l from-[#1B1B1F] to-transparent' />

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

export default TrustedBySection
