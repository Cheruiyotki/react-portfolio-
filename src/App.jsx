 import {About} from '@/sections/About'
import {Contact} from '@/sections/Contact'
import {Experience} from '@/sections/Experience'
import {Hero} from '@/sections/Hero'
import {Projects} from '@/sections/Projects'
import {Testimonals} from '@/sections/Testimonals'
import { Navbar } from '@/layout/Navbar'


function App() {
   
  return  (
     <div className="min-h-screen overflow-x-hidden ">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonals />
        <Contact />
      </main>
     </div>
  )
}

export default App
