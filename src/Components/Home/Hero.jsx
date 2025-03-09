import React from 'react'
import { BiArrowBack, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'
import { Link } from 'react-scroll'

function Hero() {
  return (
    <div id='home' className='h-full w-full md:w-[90%] lg:h-[90vh] lg:w-full md:pl-10 lg:pl-0 pt-0 sm:pt-10 lg:py-36 my-10 md:my-20 lg:my-0' >
      <div className='h-full w-full lg:w-3/4 text-center md:text-start' >
        <div className='w-[95%] font-bold mb-6' >
          <h1 className='text-3xl sm:text-4xl md:text-6xl' >I'm <span className='textcolor'>Lucky Thakur</span></h1>
          <h1 className='w-full lg:w-[80%] text-lg sm:text-3xl md:text-4xl' >MERN Stack Developer passionate about building scalable web applications.</h1>
        </div>
        <p className='text-xs md:text-sm md:w-[65%] lg:w-[50%] text-center md:text-start text-gray-400'>Passionate about building scalable web applications and seamless user experiences. Skilled in HTML, CSS, JavaScript, Tailwind CSS, React.js, Node.js, Express.js, and MongoDB. Seeking opportunities to grow and contribute to innovative projects.</p>

        <div className='w-full flex justify-center md:justify-start items-center mt-4' >
          <a href="https://www.linkedin.com/in/lucky-thakur-533628258/">
            <BiLogoLinkedin className='text-2xl' />
          </a>
          <a href="https://github.com/luckythakur00">
            <BiLogoGithub className='text-2xl mx-2' />
          </a>
        </div>
        <div className='w-full' >
          <Link to='contact' smooth={true} offset={-80} duration={500} className='btn h-10 w-36 mt-5 m-auto md:ml-0 rounded-md flex justify-center items-center text-base font-semibold bg-purple-700 text-white cursor-pointer' >Contact Me <BiArrowBack className='text-xl font-bold ml-2' /> </Link>
        </div>

      </div>
    </div>
  )
}

export default Hero