
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBookOpenReader} from "react-icons/fa6"
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";





const Navbar = () => {
  const [MenuOpen,setMenuOpen]=useState(false)
  const [Sticky,setSticky]=useState(false)

 
//toggle menu
const toggleMenu = () =>{
  setMenuOpen(!MenuOpen)
}

useEffect(()=>{
  const handleScroll=()=>{
    if(window.scrollY>100){
      setSticky(true)
    }else{
      setSticky(false)
    }
  }
  window.addEventListener("scroll",handleScroll);
  return ()=>{
    window.removeEventListener("scroll",handleScroll)
  }
},[])
//navItems here
const navItems = [
    {link:"Home",path:"/home"},
    {link:"About",path:"/about"},
    {link:"Shop",path:"/shop"},
    {link:"Sell Your Book",path:"/admin/dashboard"},
    {link:"blog",path:"/blog"}

]
return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all aese-in duration-300'>
      <nav className={`py-4 lg:px-24 px-4 ${Sticky ? "sticky top-0 left-0 right-0 bg-blue-300":""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          {/*logo*/}
          <Link to="/home" className='text-2x1 font-bold text-blue-800 flex items-center gap-2'><FaBookOpenReader className='inline-block'/>Books</Link>
          {/*nav item for large device*/}
          <ul className='md:flex space-x-12 hidden'>
            {navItems.map((item,index)=>(
             
              <li className='list-none ' key={index}>
              <Link to={item.path} className="text-black hover:text-blue-500">{item.link}</Link>
            </li>
      ))}
          </ul>
          {/*btn for lg device*/}


          <div className='space-x-12 hidden lg:flex items-center'>
            <button><IoMenu className='w-5 hover:text-blue-700'/></button>
          </div>


          {/*btn for small device*/}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
              {
                MenuOpen ? <FaXmark className='w-5 hover:text-blue-700'/> : <IoMenu className='w-5 hover:text-blue-700'/>
              
              }
            </button>
          </div>
      </div>
      {/*navitems for small devices */}
     <div className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${MenuOpen ? "block fixed top-0 right-0 left-0":"hidden"}`}>
     {navItems.map((item,index)=>(
             
             <li className='list-none ' key={index}>
             <Link to={item.path} className="text-white uppercase hover:text-blue-500">{item.link}</Link>
           </li>))}
     </div>
            
    
          
      </nav>
    </header>
  )
}

export default Navbar