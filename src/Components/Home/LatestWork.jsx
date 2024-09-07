import React from 'react'
import project_4 from '../../assets/project_4.svg'
import { BiCircle, BiStar } from 'react-icons/bi'
import project1 from '../../assets/youtubeClone.png'
import project2 from '../../assets/Expense-Tracker.png'
import project3 from '../../assets/currencyConvertor.png'

function LatestWork() {
  return (
    <div id='latestwork' div className=' relative m-auto mt-10 mb-2'>
      <div className='m-auto text-center relative'>
        <h1 className='text-5xl font-semibold py-7'>Latest Work</h1>
        <BiStar className=' animate-spin text-2xl absolute bottom-0' />
      </div>
      <BiCircle className='text-5xl animate-pulse absolute bottom-0 right-10' />
      <BiCircle className='text-4xl animate-pulse absolute bottom-6 right-10' />

      <div className='min-h-96 w-full xl:w-11/12 m-auto flex flex-wrap justify-between items-start ' >
        {/* First box */}
        <div className='h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-4 ' >
          <a href='https://lucky-you-tube-clone.netlify.app/' className='h-[60%] w-full lg:h-60 lg:w-[80%] m-auto' >
            <img className='project h-[92%] w-11/12 m-auto duration-300 rounded-lg ' src={project1} />
          </a>
          <div className='h-[40%] w-full lg:w-1/2 pl-4 lg:pl-2' >
            <h1 className='text-base font-semibold pb-1' >You Tube Clone</h1>
            <p>This project is a YouTube clone built using React.js, Tailwind CSS, and Context API for efficient state management. It features a sleek, user-friendly, and fully responsive design.</p>
            <div className='flex justify-start items-center my-2' >
              <a href='https://github.com/luckythakur00/You-Tube-Clone' className='h-8 w-24 pt-1.5 text-sm text-center bg-purple-700 btn rounded-full' >View Code</a>
              <a href='https://lucky-you-tube-clone.netlify.app/' className='h-8 w-24 pt-1.5 text-sm text-center bg-purple-700 btn ml-2 rounded-full' >View Live</a>
            </div>
          </div>
        </div>
        {/* Second box */}
        <div className='h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-4 ' >
          <a href='https://expense-tracker-inreact.netlify.app/' className='h-[60%] w-full lg:h-60 lg:w-[80%] m-auto' >
            <img className='project h-[92%] w-11/12 m-auto duration-300 rounded-lg ' src={project2} />
          </a>
          <div className='h-[40%]  w-full lg:w-1/2 pl-4 lg:pl-2' >
            <h1 className='text-base font-semibold pb-1' >Expense Tracker</h1>
            <p>This is a responsive Expense Tracker built with React.js and Tailwind CSS for easy expense management.</p>
            <div className='flex justify-start items-center my-2' >
              <a href='https://github.com/luckythakur00/Expense-Tracker' className='btn h-8 w-24 pt-1.5 text-sm text-center bg-purple-700 rounded-full' >View Code</a>
              <a href='https://expense-tracker-inreact.netlify.app/' className='btn h-8 w-24 pt-1.5 text-sm text-center bg-purple-700 ml-2 rounded-full' >View Live</a>
            </div>
          </div>
        </div>
        {/* Third box */}
        <div className='h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-4 ' >
          <a href='https://currencyconvertorrapp.netlify.app/' className='h-[60%] w-full lg:h-60 lg:w-[80%] m-auto' >
            <img className='project h-[92%] w-11/12 m-auto duration-300 rounded-lg ' src={project3} />
          </a>
          <div className='h-[50%] w-full lg:w-1/2 pl-4 lg:pl-2' >
            <h1 className='text-base font-semibold pb-1' >Currency Convertor</h1>
            <p>This Currency Converter app is built using React.js and Tailwind CSS. It allows users to easily convert between different currencies with a responsive design.</p>
            <div className='flex justify-start items-center my-2' >
              <a href='https://github.com/luckythakur00/Currency-Converter' className='btn h-8 w-24 pt-1.5 text-sm text-center bg-purple-700 rounded-full' >View Code</a>
              <a href='https://currencyconvertorrapp.netlify.app/' className='btn h-8 w-24 pt-1.5 text-sm text-center bg-purple-700 ml-2 rounded-full' >View Live</a>
            </div>
          </div>
        </div>
        {/* Forth box */}
        {/* <div className='h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-4 ' >
          <a href='' className='h-[60%] w-full lg:h-60 lg:w-[80%] m-auto' >
            <img className='project h-[92%] w-11/12 m-auto duration-300 rounded-lg ' src={project_4} />
          </a>
          <div className='h-[50%] w-full lg:w-1/2 pl-4 lg:pl-2' >
            <h1 className='text-base font-semibold pb-1' >Currency Convertor</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, consequatur?</p>
            <div className='flex justify-start items-center my-2' >
              <a href='' className='btn h-8 w-24 pt-1.5 text-sm text-center bg-purple-700 rounded-full' >View Code</a>
              <a href='' className='btn h-8 w-24 pt-1.5 text-sm text-center bg-purple-700 ml-2 rounded-full' >View Live</a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default LatestWork