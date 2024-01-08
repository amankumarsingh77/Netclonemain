import React, { useEffect, useRef, useState } from 'react'
import ApiCall from './apicall'
import { useNavigate } from 'react-router-dom'

const Actors = () => {

  const poster_pre = "https://image.tmdb.org/t/p/w500/"
  const [actors, setActors] = useState([])
  const navigate = useNavigate()

  const castContainerRef = useRef(null);

  const castNavigate = (tmdbid)=>{
    navigate(`/person/${tmdbid}`)
  }

  const scrollLeft = () => {
    if (castContainerRef.current) {
      castContainerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (castContainerRef.current) {
      castContainerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    ApiCall("person/popular")
      .then((response) => {
        
        setActors(response.results);
      })
  }, [])

  return (
    <div className='p-6'>
      <p className='text-white'>Popular Actors</p>
      <div className="relative">
        <div
          ref={castContainerRef}
          className="flex flex-row gap-4 overflow-x-hidden"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {actors
            .filter(actor => actor.profile_path) // Filter out items with null profile_path
            .map((actor, index) => (
              <div key={index} className="flex-shrink-0 p-4 bg-gray-800 justify-center items-center rounded-lg cursor-pointer flex-none" onClick={()=>{castNavigate(actor.id)}}>
                <img className="object-cover w-16 h-16 overflow-hidden rounded-full" src={`${poster_pre}${actor.profile_path}`} alt={actor.name} />
                <p className="w-10 mt-2 text-xs text-white text-center">
                  {actor.name}
                </p>
              </div>
            ))
          }
        </div>
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-md" onClick={scrollLeft}>
          &lt;
        </button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-md" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );


}


export default Actors
