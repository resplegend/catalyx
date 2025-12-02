import ContactUsButton from '../buttons/contact-us'

const CTASection: React.FC = () => {
  return (
    <section id='cta' className='py-32 md:py-48 xl:py-64'>
      <div className='container-main space-y-16'>
        <div className='mx-auto w-full max-w-[900px] space-y-4'>
          <h2 className='text-center'>The Infrastructure Every Builder Wished They Had</h2>
          <p className='mx-auto w-full max-w-xl text-center text-base/[22px] text-[#CACAD6] md:text-lg/[25px]'>
            We take everything that slows Solana apps down — and remove it. Then we add the tools
            you always wanted but never got.
          </p>
        </div>

        <ContactUsButton className='mx-auto' />
      </div>
    </section>
  )
}

export default CTASection
