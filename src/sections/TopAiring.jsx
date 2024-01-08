import React, { useEffect, useState } from 'react'
import ApiCall from './apicall';
import { useNavigate } from 'react-router-dom';


const TopAiring = () => {
    const  [topAiring,setTopAiring]= useState([]);
    const [isLoading, setIsloading] = useState(true);
    const poster_pre = "https://image.tmdb.org/t/p/w342/"
    const navigate = useNavigate();

    const movieNavigate = (tmdbid)=>{
        navigate(`movie/${tmdbid}`);
    }

    useEffect(()=>{
        ApiCall("movie/top_rated")
        .then((response)=>{
            setTopAiring(response.results)
        })
    },[])
   
  return (
    
    <div>
        <p class='text-[#FEDD95] text-2xl p-2'>Top Airing</p>
        {topAiring.splice(0,5).map((movie)=>{
            return(
                <div class='flex m-3 bg-gray-800 rounded-md cursor-pointer' onClick={()=>{movieNavigate(movie.id)}}>
                    <img class=' w-[60px] h-[76px] rounded-md' src={`${poster_pre}${movie.poster_path}`}></img>
                    <p class='text-white font-normal m-3 max-sm:w-20 w-[100px] text-sm'>{movie.title}</p>
                </div>
        )
        })}
    </div>
  )
}

export default TopAiring
