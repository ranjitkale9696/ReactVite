import './App.css'
import FeatureSection from './components/FeatureSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Workflow from './components/Workflow'

function App() {

  return (
   <>

   <Navbar/>
   <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection/>
        <Workflow />
        
      </div>
   </> 
    
  )
}

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="max-w-7xl mx-auto pt-20 px-6">
       
//       </div>
//     </>
//   );
// };

export default App
