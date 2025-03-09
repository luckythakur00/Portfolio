import { useState } from 'react';
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home/Home'
import SideBar from './Components/SideBar';

function App() {
  const [sideBar, setSideBar] = useState(false);

  // Todo:
  // Change the footer. in the last one terms of services, privacy policy, contact with me REMOVE ALL OF THESE and also change the font size of the above one to small below my name
  // Add updated resume in it.
  // Check the content again, and change it if it isn't good.

  return (
    <div className='h-full w-full'>
      <div>
        <Header sideBar={sideBar} setSideBar={setSideBar} />
      </div>
      <div className={`${sideBar ? 'visible h-[100vh] ' : 'h-0 w-0 invisible'} fixed z-50 top-0 right-0`} >
        <SideBar sideBar={sideBar} setSideBar={setSideBar} />
      </div>
      <div className='h-full w-full absolute top-14' >
        <Home />
      </div>
    </div>
  )
}

export default App