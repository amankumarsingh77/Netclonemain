import React, { useEffect, useState } from 'react'
import ApiCall from './apicall';
import Login from '../components/Login';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
    const [popular, setPopular] = useState([]);
    const poster_pre = 'https://image.tmdb.org/t/p/original';
    const navigate = useNavigate()
    
      
   

    useEffect(()=>{
        ApiCall("movie/popular")
        .then((response)=>{
            const bg= response?.results?.[Math.floor(Math.random()*20)];
            // console.log(bg.release_date)
            setPopular(bg);
        })
        
    },[])
    // console.log(formatDate(popular.release_date))
    return (
        <div className="relative text-white" style={{ height: '80vh' }}>
            <img src={`${poster_pre}${popular?.backdrop_path}`}  alt="Rurouni Kenshin: Meiji Kenkaku Romantan anime artwork with main characters in traditional Japanese setting" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-overlay" style={{background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',}}></div>
            <div className="container mx-auto px-4 py-8 relative ">
                <div className="mb-4">
                    <h2 className="text-sm font-bold uppercase tracking-wider"> #1 Spotlight </h2>
                </div>
                <div className="flex items-center justify-between m-[10%] max-sm:m-[20%]">
                    <div>
                        <h1 className="text-6xl font-bold max-sm:text-4xl">{popular.original_title}</h1>
                        <div className="flex items-center my-4">
                            <div className="bg-gray-800 text-gray-400 py-1 px-3 rounded mr-2 text-sm">Movie</div>
                            <div className="text-gray-400 mr-2">22m</div>
                            <div className="text-gray-400"></div>
                            <div className="flex items-center ml-4">
                                <i className="fas fa-hd text-blue-400 mr-1"></i>
                                <span className="text-blue-400 text-sm">HD</span>
                            </div>
                           
                        </div>
                        <p className="text-gray-400 text-lg max-sm:hidden">{popular.overview}</p>


                        <div className="flex mt-4">
                            <button className="bg-yellow-400 text-black py-2 px-4 rounded-full font-bold mr-2 flex items-center" >
                                <i className="fas fa-play mr-2"></i> Watch Now
                            </button>
                            <button className="text-yellow-400 py-2 px-4 rounded-full font-bold flex items-center "onClick={e=>navigate(`/movie/${popular.id}`)}>
                                Detail <i className="fas fa-chevron-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                    <div className="flex-shrink-0 hidden md:block">
                        <div className="relative">
                            {/* <img src="https://placehold.co/600x300" alt="Rurouni Kenshin: Meiji Kenkaku Romantan anime artwork with main characters in traditional Japanese setting" className="rounded-lg shadow-lg" /> */}
                            <div className="absolute top-0 right-0 p-2">
                                <button className="text-white">
                                    <i className="fas fa-chevron-right fa-2x"></i>
                                </button>
                            </div>
                            <div className="absolute bottom-0 left-0 p-2">
                                <button className="text-white">
                                    <i className="fas fa-chevron-left fa-2x"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Hero