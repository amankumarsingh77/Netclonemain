import React, { useEffect, useState } from 'react'
import ApiCall from './apicall'

const ActorsMoviesSection = (props) => {
    const [casts, setCast]= useState([])
    
    useEffect(()=>{
        ApiCall(`movie/${props.tmdbid}/credits`)
        .then((response)=>{
            setCast(response.cast);
        })
    },[])
  return (
    <div>
        
      {casts.map((cast)=>{
        
        <img className="object-cover w-20 h-20 overflow-hidden rounded-full border hover:cursor-pointer" src="https://www.themoviedb.org/t/p/w276_and_h350_face/tABRYOHUQeaUCAqrelJV5ZHjl1W.jpg"></img>
        // {cast.profile_path!=null ? (
            
            
        // ):(
        //     <></>
        // )}
        
    })}
    </div>
  )
}

export default ActorsMoviesSection
