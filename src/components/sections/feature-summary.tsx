import ContactUsButton from '../buttons/contact-us'

const FeatureSummarySection: React.FC = () => {
  return (
    <section id='featureSummary' className='pt-24 pb-16 xl:pt-32 xl:pb-0'>
      <div className='container-main flex flex-col gap-8 xl:flex-row xl:gap-4'>
        <div className='w-full shrink-0 xl:max-w-xl xl:space-y-10'>
          <div className='space-y-5'>
            <h2>Features you do not want to miss</h2>
            <p className='text-sm/[21px] font-medium text-[#CACAD6] md:text-base/[24px] xl:text-lg/[27px]'>
              Explore our flexible pricing options and find the one that best suits your
              cryptocurrency management needs.
            </p>
          </div>

          <ContactUsButton className='hidden xl:flex' />
        </div>

        <div className='grow overflow-hidden rounded-2xl border border-[#363643] bg-[#24242A]'>
          <div className='grid h-[70px] grid-cols-7 border-b border-[#33333F] md:h-[100px] md:grid-cols-3 xl:h-[130px]'>
            <div className='col-span-3 flex items-center px-4 md:col-span-1 md:px-6 xl:px-8'>
              <p className='max-w-60 text-sm/[18px] font-medium md:text-lg/[23px] xl:text-[22px]/[28px]'>
                Optimize Your Node Setup Right
              </p>
            </div>

            <div className='col-span-2 flex items-center justify-center bg-[#151519] px-4 text-[#9595A3] md:col-span-1 md:px-6 xl:px-8 xl:text-white'>
              <p className='text-center text-xs font-medium md:text-sm xl:text-base'>Competitors</p>
            </div>

            <div className='col-span-2 flex items-center justify-center px-4 md:col-span-1 md:px-6 xl:px-8'>
              <p className='text-center text-sm font-bold md:text-base xl:text-lg'>Catalyx</p>
            </div>
          </div>

          <Row label='Node Performance Tracking' competitor='Up to 5' catalyx='Unlimited' />
          <Row label='Real-Time Blockchain Data' competitor='√' catalyx='√' />
          <Row label='AI-Driven Chain Analysis' competitor='-' catalyx='√' />
          <Row label='Custom Node Alerts' competitor='Limited' catalyx='Unlimited' />
          <Row label='Advanced Node Analytics' competitor='-' catalyx='-' />
          <Row label='Network & Security Analysis' competitor='Basic' catalyx='Full' />
          <Row label='Node Watchlist Management' competitor='Basic' catalyx='Full' />
          <Row label='Export Node Reports (PDF/CSV)' competitor='-' catalyx='√' />
          <Row
            label='Developer Support'
            competitor='Email Support'
            catalyx='Priority Chat Support'
          />
        </div>

        <ContactUsButton className='mx-auto xl:hidden' />
      </div>
    </section>
  )
}

type RowProps = {
  label: string
  competitor: string
  catalyx: string
}

const Row: React.FC<RowProps> = ({ label, competitor, catalyx }) => {
  return (
    <div className='grid h-[75px] grid-cols-7 md:h-[90px] md:grid-cols-3 xl:h-[105px]'>
      <div className='col-span-3 flex items-center px-4 md:col-span-1 md:px-6 xl:px-8'>
        <p className='text-left text-xs text-[#B9B9C4] md:text-[15px] xl:text-lg'>{label}</p>
      </div>

      <div className='col-span-2 flex items-center justify-center bg-[#151519] md:col-span-1'>
        {competitor === '√' ? (
          <div className='flex size-6 items-center justify-center rounded-sm bg-[#33A788] text-[10px] md:size-8 md:rounded-md md:text-sm xl:size-11 xl:rounded-lg xl:text-base'>
            {competitor}
          </div>
        ) : competitor === '-' ? (
          <div className='flex size-6 items-center justify-center rounded-sm bg-[#2D2D3A] text-[10px] md:size-8 md:rounded-md md:text-sm xl:size-11 xl:rounded-lg xl:text-base'>
            {competitor}
          </div>
        ) : (
          <p className='text-center text-xs font-medium text-[#9595A3] sm:text-sm'>{competitor}</p>
        )}
      </div>

      <div className='col-span-2 flex items-center justify-center md:col-span-1'>
        {catalyx === '√' ? (
          <div className='flex size-6 items-center justify-center rounded-sm bg-[#33A788] text-[10px] md:size-8 md:rounded-md md:text-sm xl:size-11 xl:rounded-lg xl:text-base'>
            {catalyx}
          </div>
        ) : catalyx === '-' ? (
          <div className='flex size-6 items-center justify-center rounded-sm bg-[#151519] text-[10px] md:size-8 md:rounded-md md:text-sm xl:size-11 xl:rounded-lg xl:text-base'>
            {catalyx}
          </div>
        ) : (
          <p className='text-center text-xs font-medium text-white md:text-sm'>{catalyx}</p>
        )}
      </div>
    </div>
  )
}

export default FeatureSummarySection
