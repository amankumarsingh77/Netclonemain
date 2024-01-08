import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ApiCall from '../sections/apicall';
import ContentCard from '../sections/ContentCard';

const SearchResults = () => {
    const query = useParams();
    const [content, setContent] = useState([]);
    useEffect(() => {
        ApiCall(`search/multi?query=${query.id}`)
            .then((response) => {
                setContent(response.results);
            });
    }, [query]);
    return (
        <div className='relative bg-gray-900 overflow-hidden h-screen'>
            <div className='p-6 item-center flex-wrap -mx-4'>
                <p className='text-[#FEDD95] text-2xl p-2'>{`Search Results for ${query.id}`}</p>

                {/* <div class=" justify-between mt-[30%] bg-gray-800 p-1 flex"> */}
                <div class=" relative items-center grid grid-cols-3 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-8 gap-4 rounded-md p-3">
                    {content.filter(movie => movie.poster_path).map((movie) => {
                        return (
                            <ContentCard movie={movie} />
                        )
                    })}
                </div>




            </div>
        </div>
    )
}

export default SearchResults