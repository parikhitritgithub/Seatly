import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { useAppContext } from '../context/Appcontext'

const Navbar = () => {
  const { favorites } = useAppContext();
  const [isOpen, setisOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();
  
  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-8 lg:px-16 py-5 bg-background'>
      <Link to='/' onClick={() => { scrollTo(0,0)}} className='max-md:flex-1'>
        <img src={assets.logo} alt="Logo" className='h-auto w-40' />
      </Link>
      
      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center gap-6 px-6 py-3 rounded-full backdrop-blur bg-white/10 border border-gray-300/20'>
        <Link to="/" onClick={() => scrollTo(0,0)} className='hover:text-primary'>Home</Link>
        <Link to="/movies" onClick={() => scrollTo(0,0)} className='hover:text-primary'>Movies</Link>
        {favorites.length > 0 && (
          <Link to="/favourites" onClick={() => scrollTo(0,0)} className='hover:text-primary'>Favourite</Link>
        )}
        <Link to="/my-bookings" onClick={() => scrollTo(0,0)} className='hover:text-primary'>Bookings</Link>
        <Link to="/admin" onClick={() => scrollTo(0,0)} className='text-primary'>Dashboard</Link>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 z-50 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <XIcon className='absolute top-6 right-6 w-8 h-8 cursor-pointer' onClick={() => setisOpen(false)} />
        <Link to="/" onClick={() => { scrollTo(0,0); setisOpen(false) }} className='text-xl hover:text-primary'>Home</Link>
        <Link to="/movies" onClick={() => { scrollTo(0,0); setisOpen(false) }} className='text-xl hover:text-primary'>Movies</Link>
        {favorites.length > 0 && (
          <Link to="/favourites" onClick={() => { scrollTo(0,0); setisOpen(false) }} className='text-xl hover:text-primary'>Favourite</Link>
        )}
        <Link to="/my-bookings" onClick={() => { scrollTo(0,0); setisOpen(false) }} className='text-xl hover:text-primary'>Bookings</Link>
        <Link to="/admin" onClick={() => { scrollTo(0,0); setisOpen(false) }} className='text-xl text-primary'>Dashboard</Link>
      </div>
      
      {/* Right side icons */}
      <div className='flex items-center gap-4'>
        <SearchIcon className='w-6 h-6 hidden md:block' />
        
        {!user ? (
          <button 
            onClick={openSignIn} 
            className='px-4 py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer text-sm md:text-base'
          >
            Login
          </button>
        ) : (
          <UserButton afterSignOutUrl="/">
            <UserButton.Menu>
              <UserButton.MenuItem 
                label="My Bookings" 
                icon={<TicketPlus size={16} />} 
                onClick={() => navigate('/my-bookings')} 
              />
            </UserButton.Menu>
          </UserButton>
        )}
        
        <MenuIcon 
          className='md:hidden w-8 h-8 cursor-pointer' 
          onClick={() => setisOpen(true)} 
        />
      </div>
    </div>
  )
}

export default Navbar