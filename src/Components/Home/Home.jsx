import Footer from '../Footer'
import Hero from './Hero'
import LatestWork from './LatestWork'
import Contact from './Contact'
import About from './About'
import Skills from './Skills'

function Home() {
  return (
    <div className='fullbackgroundcolor px-4 xl:px-12 relative ' >
      <Hero />
      <About />
      <Skills />
      <LatestWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home