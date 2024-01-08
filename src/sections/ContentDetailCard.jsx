import React from 'react'
import { useNavigate } from 'react-router-dom'

const ContentDetailCard = (props) => {
    const genres = props.moviedata.genres
    const post_pre = "https://image.tmdb.org/t/p/w500/"
    const navigate = useNavigate();

  return (
    <div className="relative text-white z-0" style={{ height: '80vh' }}>
        {/* Image */}
        <img
          src={`${post_pre}${props.moviedata.backdrop_path}`}
          alt="Rurouni Kenshin: Meiji Kenkaku Romantan anime artwork with main characters in traditional Japanese setting"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 gradient-overlay"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
          }}
        ></div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gray-900 text-white p-6 flex items-center space-x-6 rounded-lg shadow-lg overflow-hidden max-w-screen-2xl mx-auto z-10">
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
                <button className="bg-red-600 text-white px-4 py-2 rounded-s-lg font-bold uppercase text-sm flex items-center mt-4" onClick={e=>navigate("../movie/play/123")}>
                  <i className="fas fa-play mr-2"></i> Watch now
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-e-lg font-bold uppercase text-sm flex items-center mt-4">
                  <i className="fas fa-play mr-2"></i> Save to Favourite
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default ContentDetailCard