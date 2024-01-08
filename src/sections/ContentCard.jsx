import React from 'react'
import { useNavigate } from 'react-router-dom'

const ContentCard = (props) => {
    const post_pre = "https://image.tmdb.org/t/p/w500/"
    const navigate = useNavigate();

    const onclickhandle = (movie) => {
        if (movie.media_type == 'movie') {
            navigate(`../movie/${movie.id}`);
        } else {
            navigate(`../tv/${movie.id}`);
        }


    }
    return (
        <div onClick={() => onclickhandle(props.movie)}>
            <div class=" cursor-pointer" >
                <img class="rounded-lg" src={`${post_pre}${props.movie.poster_path}`}></img>
                {props.movie.media_type == "movie" ? (
                    <div class="text-white mt-2 font-sans">
                        <p className='text-ellipsis overflow-hidden whitespace-nowrap'>{props.movie.title}</p>
                    </div>
                ) : (
                    <div class="text-white mt-2 font-sans">
                        <p className='text-ellipsis overflow-hidden whitespace-nowrap'>{props.movie.name}</p>
                    </div>
                )}


                <div class="text-[#666] text-xs flex justify-between mt-1">
                    {props.movie.media_type == "movie" ? (
                        <p>{props.movie.release_date?.split('-')[0]}</p>
                    ) : (
                        <p>{props.movie.first_air_date?.split('-')[0]}</p>
                    )}

                    <div class=" border-sm border-[#666] rounded-sm border-solid border ">
                        <p class="text-xs text-[#666] ml-1 mr-1">{props.movie.media_type}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentCard