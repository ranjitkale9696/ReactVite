import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

function App() {

  return (
   <>

   <Navbar/>
   <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        
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
