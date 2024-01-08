import React from 'react'

const MoviePlayerDetails = (props) => {
    const post_pre = "https://image.tmdb.org/t/p/original"
    const genres = props.moviedata.genres
  return (
    <div className="relative bg-inherit  text-white z-0" style={{ height: '80vh' }}>
        {/* Image */}
        

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 gradient-overlay"
         
        ></div>

        {/* Play Button */}
        <div className="absolute inset-0  ">
          <div className="bg-slate-700 text-white p-6 flex items-center space-x-6 rounded-lg shadow-lg overflow-hidden max-w-screen-2xl mx-auto z-10">
            <div className="flex-none">
              <img src={`${post_pre}${props.moviedata.poster_path}`} alt="Like a Boss movie poster" className="rounded-lg shadow-md w-72" />
            </div>
            <div className="flex-auto">
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">{props.moviedata.original_title}</h1>

              </div>
              <div className="flex items-center space-x-2 my-3">
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium">Trailer</span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium">blu-ray</span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium">IMDB: {props.moviedata.vote_average}</span>
              </div>
              <p className="text-gray-400">
                {props.moviedata.overview}
              </p>
              <div className="flex flex-wrap items-center text-sm text-gray-400 mt-4">
                <div className="w-full sm:w-auto pr-8 sm:pr-0 sm:mr-8">
                  <strong>Released:</strong> {props.moviedata.release_date}
                </div>
                <div className="w-full sm:w-auto pr-8 sm:pr-0 sm:mr-8">
                  <strong>Duration:</strong> {props.moviedata.runtime} min
                </div>
                <strong>Genre:</strong>
                
                {genres?.map((genre) => {
                  return (
                    <div className="w-full sm:w-auto pr-8 sm:pr-0 sm:mr-8">
                      <span>{`${genre.name},`}</span>
                    </div>
                  )
                })}


              </div>
              <div className="flex flex-wrap items-center text-sm text-gray-400 mt-2">
                <div className="w-full sm:w-auto pr-8 sm:pr-0 sm:mr-8">
                  <strong>Country:</strong> United Kingdom
                </div>
                {/* <p>Production Countries: {moviedata.production_countries.map((country) => country.name).join(', ')}</p> */}
                <div className="w-full sm:w-auto">
                  <strong>Production:</strong> Miguel Arteta
                </div>
              </div>
              <div className='flex gap-1'>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold uppercase text-sm flex items-center mt-4">
                  <i className="fas fa-play mr-2"></i> Save to Favourite
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default MoviePlayerDetails