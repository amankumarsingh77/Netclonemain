import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ApiCall from './apicall';

const Demo = () => {
  const poster_pre = "https://image.tmdb.org/t/p/w500/";
  const [trending, setTrending] = useState([]);
  
  useEffect(() => {
    // Assuming ApiCall fetches trending movies
    ApiCall("trending/movie/week").then((response) => {
      setTrending(response);
    });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div className="item-center flex-wrap -mx-4 z-0">
      <p className="text-[#FEDD95]">Trending</p>
      <Slider {...sliderSettings}>
        {trending.map((movie) => (
          <div key={movie.id} className="cursor-pointer">
            <img className="rounded-lg" src={`${poster_pre}${movie.poster_path}`} alt={movie.title} />
            <div className="text-white mt-2 font-sans">
              <p>{movie.title}</p>
            </div>
            <div className="text-[#666] text-xs flex justify-between mt-1">
              <p>{movie.release_date.split('-')[0]}</p>
              <div className="border-sm border-[#666] rounded-sm border-solid border">
                <p className="text-xs text-[#666] ">{movie.media_type}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Demo;
