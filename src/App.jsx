import { useState } from 'react';
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home/Home'

function App() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className='h-full w-full'>
      <div>
        <Header sideBar={sideBar} setSideBar={setSideBar} />
      </div>
      <div className='h-full w-full absolute top-14' >
        <Home sideBar={sideBar} setSideBar={setSideBar} />
      </div>
    </div>
  )
}

export default App