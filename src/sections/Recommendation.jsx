import React, { useEffect, useState } from 'react'
import ApiCall from './apicall'
import { useNavigate } from 'react-router-dom'
import ContentCard from './ContentCard'

const Recommendation = (props) => {
  const [recommendations, setRecommendations] = useState()
  const post_pre = "https://image.tmdb.org/t/p/w500/"




  useEffect(() => {
    console.log(props.moviedata)
    if (props.media_type === "movie") {
      ApiCall(`movie/${props.moviedata?.id}/recommendations`)
        .then((response) => {
          setRecommendations(response.results);
        });
    } else if (props.moviedata) {
      console.log(props.moviedata?.id)
      ApiCall(`tv/${props.moviedata?.id}/recommendations`)
        .then((response) => {
          setRecommendations(response.results);
        });
    }
  }, [props.moviedata]);
  return (
    <div key={props.moviedata?.id} className=' mt-5 p-2'>
      <p className='text-[30px] text-white m-4'>Related Content</p>

      {/* <div class=" justify-between mt-[30%] bg-gray-800 p-1 flex"> */}
      
      <div class="bg-gray-800 relative items-center grid grid-cols-3 md:grid-cols-3sm:grid-cols-3 lg:grid-cols-8 gap-4 rounded-md">

        {recommendations?.filter(movie => movie.poster_path).slice(0, 16).map((movie) => {

          return (
            <ContentCard movie={movie} />
          )
        })}
      </div>




    </div>
  )
}

export default Recommendation