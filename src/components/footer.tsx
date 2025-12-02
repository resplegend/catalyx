import Logo from './logo'
import Socials from './socials'

const Footer: React.FC = () => {
  return (
    <footer id='footer' className='py-16'>
      <div className='container-main space-y-10'>
        <Socials className='mx-auto' />

        <div className='flex flex-col items-center justify-between lg:flex-row lg:p-2.5'>
          <Logo className='lg:w-[300px]' />

          <p className='order-1 mt-8 text-sm/5 font-medium text-[#CACAD6] md:text-base/[22px] lg:order-[unset] lg:mt-0'>
            ©2025 All right reserved
          </p>

          <div className='mt-[50px] flex justify-end gap-10 lg:mt-0 lg:w-[300px]'>
            <p className='text-sm/5 font-medium text-[#CACAD6] md:text-base/[22px]'>
              Terms & Conditions
            </p>
            <p className='text-sm/5 font-medium text-[#CACAD6] md:text-base/[22px]'>
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
