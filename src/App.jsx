
import './App.css'
import FeatureSection from './component/FeatureSection'
import Footer from './component/Footer'
import HeroSection from './component/HeroSection'
import NavBar from './component/NavBar'
import Pricing from './component/Pricing'
import Testimonials from './component/Testimonials'
import Workflow from './component/Workflow'


function App() {
  
  return (
    <>
      <NavBar/>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection/>
      <FeatureSection/>
      <Workflow/>
      <Pricing />
      <Testimonials/>
      <Footer/>
      </div>
      
    </>
  )
}

export default App
