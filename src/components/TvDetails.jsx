import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ApiCall from '../sections/apicall'
import Recommendation from '../sections/Recommendation'
import ContentDetailCard from '../sections/ContentDetailCard'

const TvDetails = () => {
    const tmdbid = useParams()
  const [moviedata, setMoviedata] = useState([]);
  const [casts, setCast] = useState([]);
  const [genres, setGenres] = useState([]);
  const post_pre = "https://image.tmdb.org/t/p/original"
  const navigate = useNavigate();

  const castContainerRef = useRef(null);

  const castNavigate = (tmdbid)=>{
    navigate(`../person/${tmdbid}`);
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
    ApiCall(`tv/${tmdbid.id}`)
      .then((response) => {
        setGenres(response.genres);
        setMoviedata(response);
      })

    ApiCall(`tv/${tmdbid.id}/credits`)
      .then((response) => {
        setCast(response.cast);
      })
  }, [tmdbid])
  return (
    <div className=" bg-gray-800 min-h-screen  ">
      
      <ContentDetailCard moviedata={moviedata}/>


      <p className="p-6 text-white text-[30px]" >Casts</p>

      <div className="p-6 bg-slate-700 relative">
        {/* Arrow buttons at the start and end */}
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-md" onClick={scrollLeft}>
          &lt;
        </button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-md" onClick={scrollRight}>
          &gt;
        </button>

        <div
          ref={castContainerRef}
          className=" flex flex-row gap-4 overflow-x-hidden"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {casts
          .filter(actor => actor.profile_path).map((cast, index) => (
            <div key={index} className="flex-none" onClick={()=>{castNavigate(cast.id)}}>
              {cast.profile_path != null && (
                <img
                  className="object-cover w-20 h-20 overflow-hidden rounded-full border hover:cursor-pointer"
                  src={`https://www.themoviedb.org/t/p/w276_and_h350_face${cast.profile_path}`}
                  alt={cast.name}
                />

              )}
            </div>
          ))}
        </div>
      </div>


      <Recommendation moviedata={moviedata}/>


    </div>

  )
}

export default TvDetails