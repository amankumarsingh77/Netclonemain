import React, { useEffect, useState } from 'react'

const TvPlayer = () => {
    const tmdbid = useParams();
    const [moviedata, setMoviedata] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
  
        ApiCall(`tv/${tmdbid.id}`)
          .then((response) => {
            setGenres(response.genres);
            setMoviedata(response);
          })
    
        
      }, [tmdbid])
  return (
    <div className='bg-gray-900 h-screen'>
            
            <div>
                <p className='text-white text-3xl p-5'>Open</p>
                <iframe
                    className='p-3 rounded-2xl overflow-hidden'
                    width="1080"
                    height="540"
                    src={`https://vidsrc.to/embed/movie/872585`}
                    title="YouTube Video"
                    frameBorder="0"
                    scrolling="no"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
                    allowFullScreen
                ></iframe>
            </div>

        </div>
  )
}

export default TvPlayer