'use client'

import ContactUsButton from '../buttons/contact-us'

const StepsSection: React.FC = () => {
  return (
    <section id='steps' className='py-16 md:py-24 xl:py-32'>
      <div className='container space-y-8 md:space-y-12 xl:space-y-16'>
        <div className='mx-auto w-full max-w-3xl space-y-4'>
          <h2 className='md:text-center'>Starting Is As Simple As A Blink</h2>
          <p className='max-w-xl text-xs/[17px] md:mx-auto md:text-center md:text-[15px]/[21px] xl:text-lg/[25px]'>
            We take everything that slows Solana apps down — and remove it. Then we add teh tools
            you always wanted but never got.
          </p>
        </div>

        <div className='grid gap-4 xl:grid-cols-3'>
          <div className='h-fit space-y-8 rounded-3xl border border-[#24242A] bg-[#151519] p-8 pb-10 md:pb-13 xl:pb-16'>
            <h5 className='text-xs leading-normal font-bold text-[#33A788] md:text-[15px] xl:text-lg'>
              STEP 1
            </h5>

            <div className='space-y-4'>
              <h4 className='text-[21px]/[25px] font-bold md:text-[25px]/[30px] xl:text-3xl'>
                Contact Us For Pricing
              </h4>
              <p className='text-sm leading-normal text-[#CACAD6] md:text-base xl:text-lg'>
                Seamlessly integrate our powerful API into your existing workflows. Access real-time
                data feeds, automate processes, and enhance your applications with our robust API
                capabilities.
                <br />
                <b className='text-white'>
                  Unlock new functionalities and streamline your operations with minimal effort.
                </b>
              </p>
            </div>

            <ContactUsButton />
          </div>

          <div className='h-fit space-y-8 rounded-3xl border border-[#363643] bg-[#24242A] p-8 pb-10 md:pb-13 xl:pb-16'>
            <h5 className='text-xs leading-normal font-bold text-[#81ADA1] md:text-[15px] xl:text-lg'>
              STEP 2
            </h5>

            <div className='space-y-4'>
              <h4 className='text-[21px]/[25px] font-bold md:text-[25px]/[30px] xl:text-3xl'>
                Get A Subscription
              </h4>
              <p className='text-sm leading-normal text-[#CACAD6] md:text-base xl:text-lg'>
                Seamlessly integrate our powerful API into your existing workflows. Access real-time
                data feeds, automate processes, and enhance your applications with our robust API
                capabilities.
                <br />
                <b className='text-white'>
                  Unlock new functionalities and streamline your operations with minimal effort.
                </b>
              </p>
            </div>
          </div>

          <div className='h-fit space-y-8 rounded-3xl border border-[#363643] bg-[#24242A] p-8 pb-10 md:pb-13 xl:pb-16'>
            <h5 className='text-xs leading-normal font-bold text-[#9774CB] md:text-[15px] xl:text-lg'>
              STEP 3
            </h5>

            <div className='space-y-4'>
              <h4 className='text-[21px]/[25px] font-bold md:text-[25px]/[30px] xl:text-3xl'>
                Connect The API
              </h4>
              <p className='text-sm leading-normal text-[#CACAD6] md:text-base xl:text-lg'>
                Gain deeper insights into your data with our advanced analytics tools.{' '}
                <b className='text-white'>
                  Visualize trends, run complex queries, and generate comprehensive reports to
                  inform decision-making.
                </b>{' '}
                Empower your team with actionable insights derived from reliable historical data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StepsSection
