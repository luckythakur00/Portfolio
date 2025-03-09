import React from 'react'
import { BiCircle, BiStar } from 'react-icons/bi'
import project1 from '../../assets/QuickChat.png'
import project2 from '../../assets/youtubeClone.png'
import project3 from '../../assets/Portfolio.png'
import project4 from '../../assets/Expense-Tracker.png'

function LatestWork() {

  const projects = [
    {
      projectImg: project1,
      projectCode: 'https://github.com/luckythakur00/QuickChat',
      projectView: 'https://quickchat-dju4.onrender.com/',
      projectTitle: 'QuickChat',
      projectDescription: 'QuickChat is a MERN Stack messaging app, where people can send messages to each other. I have used React.js, Tailwind CSS, Node.js, Express.js, MongoDB, socket.io and zustand to make the project.'
    },
    {
      projectImg: project2,
      projectCode: 'https://github.com/luckythakur00/You-Tube-Clone',
      projectView: 'https://lucky-you-tube-clone.netlify.app/',
      projectTitle: 'You Tube Clone',
      projectDescription: 'This is a YouTube clone built by using React.js, Tailwind CSS, and Context API for efficient state management. It features a sleek, user-friendly, and fully responsive design.'
    },
    {
      projectImg: project3,
      projectCode: 'https://github.com/luckythakur00/Portfolio',
      projectView: 'https://lucky00-portfolio.netlify.app/',
      projectTitle: 'Portfolio',
      projectDescription: 'A fully responsive portfolio built with React.js and Tailwind CSS. Showcases my latest projects and includes a section highlighting my skills.'
    },
    {
      projectImg: project4,
      projectCode: 'https://github.com/luckythakur00/Expense-Tracker',
      projectView: 'https://expense-tracker-inreact.netlify.app/',
      projectTitle: 'Expense Tracker',
      projectDescription: 'This is a responsive Expense Tracker built with React.js and Tailwind CSS for easy expense management.'
    },
  ];

  return (
    <div id='latestwork' div className=' relative m-auto mt-10 mb-2'>
      <div className='m-auto text-center relative'>
        <h1 className='text-3xl md:text-5xl font-semibold py-7'>Latest Work</h1>
        <BiStar className=' animate-spin text-2xl absolute bottom-0' />
      </div>
      <BiCircle className='text-5xl animate-pulse absolute bottom-0 right-10' />
      <BiCircle className='text-4xl animate-pulse absolute bottom-6 right-10' />

      <div className='h-full w-full xl:w-11/12 m-auto flex flex-wrap justify-between items-start ' >
        {
          projects.map((val, ind) => (
            <div key={ind} className='h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4 ' >
              <a href={val.projectView} className='h-[60%] w-full lg:h-60 lg:w-[80%] m-auto' >
                <img className='project h-[92%] w-11/12 m-auto duration-300 rounded-lg object-cover ' src={val.projectImg} />
              </a>
              <div className='h-[40%] w-full lg:w-1/2 pl-4 lg:pl-2' >
                <h1 className='text-base font-semibold pb-1' >{val.projectTitle}</h1>
                <p>{val.projectDescription}</p>
                <div className='flex justify-start items-center my-2' >
                  <a href={val.projectCode} className='h-8 w-24 pt-1.5 text-sm text-center static z-10 bg-purple-700 btn rounded-full' >View Code</a>
                  <a href={val.projectView} className='h-8 w-24 pt-1.5 text-sm text-center static z-10 bg-purple-700 btn ml-2 rounded-full' >View Live</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default LatestWork