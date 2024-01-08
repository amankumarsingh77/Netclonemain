import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ApiCall from '../sections/apicall'

const ActorDetails = () => {
    const tmdbid = useParams()
    const [actorData, setActorData] = useState([])
    const [castDetails, setCastDetails] = useState([])
    const poster_pre = "https://image.tmdb.org/t/p/w500/"
    const castContainerRef = useRef(null);
    const navigate = useNavigate()

    const handleNavigate = (movie)=>{
        if(movie.media_type=="movie"){
            navigate(`../movie/${movie.id}`);
        }else{
            navigate(`../tv/${movie.id}`);
        }
    }

    useEffect(() => {
        ApiCall(`person/${tmdbid.id}`)
            .then((response) => {
                setActorData(response);
            })
        ApiCall(`person/${tmdbid.id}/combined_credits`)
            .then((response) => {
                setCastDetails(response.cast);
            })
    }, [])

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


    return (
        <div>


            <div className='bg-gray-800 h-screen'>
                <div className=" inset-0 flex items-center justify-center">
                    <div className="bg-gray-900 text-white p-6 flex items-center space-x-6 rounded-lg shadow-lg overflow-hidden max-w-screen-2xl mx-auto z-10 grid-rows-2">
                        <div className="flex-none">
                            <img src={`${poster_pre}${actorData.profile_path}`} alt="Actor poster" className="rounded-lg shadow-md w-72" />
                        </div>
                        <div className="flex-auto">
                            <div className="flex items-center justify-between">
                                <h1 className="text-4xl font-bold">{actorData.name}</h1>
                            </div>
                            <p className="text-gray-400">
                                {actorData.biography}
                            </p>
                            <div className="flex flex-wrap items-center text-sm text-gray-400 mt-4">
                                <strong>Genre:</strong>
                                {/* Add genres here */}
                            </div>
                            <div className="flex flex-wrap items-center text-sm text-gray-400 mt-2">
                                <div className="w-full sm:w-auto pr-8 sm:pr-0 sm:mr-8">
                                    <strong>Country:</strong> United Kingdom
                                </div>
                                <div className="w-full sm:w-auto">
                                    <strong>Production:</strong> Miguel Arteta
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className='text-white text-2xl p-6'>Known For</p>

                <div className="p-6 bg-slate-700 relative mt-4">
                    <div
                        ref={castContainerRef}
                        className="flex flex-row gap-4 overflow-x-hidden"
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        {castDetails
                            .filter(movie => movie.poster_path) // Filter out items with null poster_path
                            .slice(0, 16)
                            .map((movie, index) => (
                                <div key={index} className="flex-shrink-0 p-4 bg-gray-800 justify-center items-center rounded-lg cursor-pointer flex-none" onClick={(()=>handleNavigate(movie))}>
                                    <img className="object-cover h-48 overflow-hidden" src={`${poster_pre}${movie.poster_path}`} alt={movie.name} />
                                    <div class="text-white mt-2 font-sans">
                                    <p className="text-ellipsis overflow-hidden whitespace-nowrap text-sm">
                                        {movie.name}
                                    </p>
                                    </div>
                                </div>
                            ))
                        }

                        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-md" onClick={scrollLeft}>
                            &lt;
                        </button>
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-md" onClick={scrollRight}>
                            &gt;
                        </button>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default ActorDetails