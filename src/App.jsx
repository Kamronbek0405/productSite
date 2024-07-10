import './App.css'
import { Header } from './components/header'
import { CatigorysCard } from './components/header/catigotys-card/catigorys-card'
import { catigoriesData } from './data/catigories'

import { Hero } from './components/header/hero/hero';
import { Footer } from './components/header/footer';
function App() {

  return (
    <div className=''>
      <Header/>
      <Hero/>
      <h1 className='text-2xl mt-10 ml-8'>Eng ko’p sotilgan</h1>
      <div className='flex '>
      {catigoriesData.map((catigory) =>(
        <CatigorysCard key={catigory.id} {...catigory}/>
      ))}
      </div>
      <button className='w-[1230px] h-[50px] rounded-lg ml-20 shadow-lg shadow-gray-400 hover:bg-blue-600 hover:text-white mt-5'>Ko’proq ko’rish</button>
      <Hero/>
      <h1 className='text-2xl mt-10 ml-8'>Eng ommabop</h1>
      <div className='flex '>
      {catigoriesData.map((catigory) =>(
        <CatigorysCard key={catigory.id} {...catigory}/>
      ))}
      </div>
      <button className='w-[1230px] h-[50px] rounded-lg ml-20 shadow-lg shadow-gray-400 hover:bg-blue-600 hover:text-white mt-10'>Ko’proq ko’rish</button>

      <Footer/>
    </div>
  )
}

export default App
