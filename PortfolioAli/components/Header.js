// next link
import Link from 'next/link'
// components
import Socials from '../components/Socials'


const Header = () => {
  return(
     <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
     <div className="container mx-auto">
     <div className="flex justify-between flex-row lg:flex-row  gap-y-6 py-8">
      {/* logo */}
      <Link href={'/'}>
        <h1 className='xl:text-3xl '><span className='text-accent font-semibold'>Ali</span> Raza</h1>
      </Link>
       <Socials/>
     </div>
     </div>
  </header>
)};

export default Header;
