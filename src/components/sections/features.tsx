import Image from 'next/image'
import FeatureImage1 from '@/assets/images/feature_1.png'
import FeatureImage2 from '@/assets/images/feature_2.png'
import FeatureImage3 from '@/assets/images/feature_3.png'

const FeaturesSection: React.FC = () => {
  return (
    <section id='features' className='py-16 md:py-24 xl:py-32'>
      <div className='container space-y-8 md:space-y-12 xl:space-y-16'>
        <h2 className='w-full max-w-[900px] md:mx-auto md:text-center'>
          The Infrastructure Every Builder Wishes They Had
        </h2>

        <div className='space-y-4 md:space-y-10 xl:space-y-16'>
          <div>
            <div className='grid gap-8 py-4 md:py-6 xl:grid-cols-2 xl:p-8'>
              <div className='mx-auto flex w-full max-w-[848px] items-center justify-center rounded-3xl border border-[#24242A] bg-[#151519] p-4 md:p-8 xl:p-12'>
                <Image src={FeatureImage1} alt='' />
              </div>

              <div className='flex flex-col justify-center space-y-2 md:space-y-3 xl:space-y-4'>
                <h3 className='text-lg leading-[120%] font-bold text-[#CACAD6]/50 md:text-[27px] xl:text-4xl'>
                  Fast & Rich History Look-back
                </h3>
                <p className='text-sm/[21px] text-[#CACAD6] md:text-[17px]/[25px] xl:text-xl/[30px]'>
                  <b>Stop fighting with missing data and short-window history limits.</b> Catalyst
                  gives you fast, reliable access to deep historical data, making it perfect for
                  analytics, indexing, audits, and debugging. Explore past blocks with confidence —
                  everything is stored, accessible, and delivered at high speed.
                </p>
              </div>
            </div>

            <div className='grid gap-8 py-4 md:py-6 xl:grid-cols-2 xl:p-8'>
              <div className='mx-auto flex w-full max-w-[848px] items-center justify-center rounded-3xl border border-[#24242A] bg-[#151519] p-4 md:p-8 xl:p-12'>
                <Image src={FeatureImage2} alt='' />
              </div>

              <div className='flex flex-col justify-center space-y-2 md:space-y-3 xl:space-y-4'>
                <h3 className='text-lg leading-[120%] font-bold text-[#CACAD6]/50 md:text-[27px] xl:text-4xl'>
                  Better Logging
                </h3>
                <p className='text-sm/[21px] text-[#CACAD6] md:text-[17px]/[25px] xl:text-xl/[30px]'>
                  Logging shouldn’t feel like detective work. Catalyst gives you clean, structured,
                  developer-friendly logs that actually help you understand what’s happening inside
                  your app.{' '}
                  <b>
                    Spot issues instantly, debug faster, and cut through the noise with
                    crystal-clear insights built for real engineering teams.
                  </b>
                </p>
              </div>
            </div>

            <div className='grid gap-8 py-4 md:py-6 xl:grid-cols-2 xl:p-8'>
              <div className='mx-auto flex w-full max-w-[848px] items-center justify-center rounded-3xl border border-[#24242A] bg-[#151519] px-4 py-2 md:px-8 md:py-4 xl:px-12 xl:py-6'>
                <Image src={FeatureImage3} alt='' />
              </div>

              <div className='flex flex-col justify-center space-y-2 md:space-y-3 xl:space-y-4'>
                <h3 className='text-lg leading-[120%] font-bold text-[#CACAD6]/50 md:text-[27px] xl:text-4xl'>
                  Faster Transaction Confirmation
                </h3>
                <p className='text-sm/[21px] text-[#CACAD6] md:text-[17px]/[25px] xl:text-xl/[30px]'>
                  Logging shouldn’t feel like detective work.{' '}
                  <b>
                    Catalyst gives you clean, structured, developer-friendly logs that actually help
                    you understand what’s happening inside your app.
                  </b>{' '}
                  Spot issues instantly, debug faster, and cut through the noise with crystal-clear
                  insights built for real engineering teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
