import React from 'react'
import menuClose from '../assets/menu_close.svg'
import { Link } from 'react-scroll'

function SideBar({ setSideBar }) {
    return (
        <div className='sidebarbgcolor min-h-[200vh] w-48 visible md:invisible relative ' >
            <div onClick={() => setSideBar(false)} >
                <img src={menuClose} className='headerBtn h-6 w-6 absolute top-4 right-4 cursor-pointer' />
            </div>
            <div className='flex flex-col pt-14' >
                <Link to='home' smooth={true} offset={-60} duration={500} className='headerBtn text-center text-2xl mb-10 font-bold cursor-pointer' >Home</Link>
                <Link to='aboutus' smooth={true} offset={-70} duration={500} className='headerBtn text-center text-2xl mb-10 font-bold cursor-pointer' >About Us</Link>
                <Link to='latestwork' smooth={true} offset={-30} duration={500} className='headerBtn text-center text-2xl mb-10 font-bold cursor-pointer' >Latest Work</Link>
                <Link to='contact' smooth={true} offset={-30} duration={500} className='headerBtn text-center text-2xl mb-10 font-bold cursor-pointer' >Contact</Link>
            </div>
        </div>
    )
}

export default SideBar