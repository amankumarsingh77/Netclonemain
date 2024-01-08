import React from 'react'
import TopAiring from '../sections/TopAiring'
import MostFavorite from '../sections/NowPlayiing'
import MostPopular from '../sections/MostPopular'
import Nav from '../sections/Nav'
import Actors from '../sections/Actors'
import Hero from '../sections/Hero'
// import Demo from './sections/Demo'
// import Login from './components/Login'
const HomeFeed = () => {
  return (
    <div>
    
    
    <div className='relative bg-gray-900 '>
      
      <div className=''>
        <Hero/>
       
           {/* <div className='px-8  py-12 flex justify-between p-4 '> */}
           {/* <Demo/> */}
          <section className='px-8  py-12 '>
            <MostPopular/>
          </section>
          <Actors/>
          
          <div className='grid grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1'>
          <section className='px-8 py-12'>
            <TopAiring/>
          </section>
          <section className='px-8  py-12 '>
            <MostFavorite/>
            MostFavorite
          </section>
          </div>
          
        {/* </div> */}
      </div>
      
    </div>
    </div>

    
  )
}

export default HomeFeed


