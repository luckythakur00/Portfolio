import { useState } from 'react';
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home/Home'
import SideBar from './Components/SideBar';

function App() {
  const [sideBar, setSideBar] = useState(false);

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