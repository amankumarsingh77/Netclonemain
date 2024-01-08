import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash/debounce';
import ApiCall from './apicall';
import { data } from 'autoprefixer';
import ContentCard from './ContentCard';

const MostPopular = () => {
    const poster_pre = "https://image.tmdb.org/t/p/w500/"
    const  [trending,setTrending]= useState([]);
    const [isLoading, setIsloading] = useState(true);
    const navigate = useNavigate()

    const onclickhandle =(id)=>{
      navigate(`/movie/${id}`);
    }
    
    useEffect(()=>{
        ApiCall("trending/movie/day")
        .then((data)=>{
            setTrending(data.results);
            
        })
    },[])
    
  return (
    <div className='item-center flex-wrap -mx-4'>
        <p className='text-[#FEDD95] text-2xl p-2'>Trending</p>
                
                {/* <div class=" justify-between mt-[30%] bg-gray-800 p-1 flex"> */}
                <div class=" relative items-center grid grid-cols-3 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-8 gap-4 rounded-md p-3">
                {trending.slice(0,16).map((movie)=>{
                    return (
                      <ContentCard movie={movie}/>
                    )
                })}
                </div>

            
        
      
    </div>
  )
}

export default MostPopular
