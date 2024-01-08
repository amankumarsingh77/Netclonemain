import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import ApiCall from '../sections/apicall';
import ContentDetailCard from '../sections/ContentDetailCard'
import MoviePlayerDetails from '../sections/MoviePlayerDetails';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';


const MoviePlayer = () => {
    const tmdbid = useParams();
    const [moviedata, setMoviedata] = useState([]);
    const [genres, setGenres] = useState([]);
    const m3u8Url = 'https://pub-f80f63edec924c21a94fa28f7517222e.r2.dev/Vigilante/[MkvDrama.Org]Vigilante.S01E02.DSNP.x264.720p.mkv';

    useEffect(() => {

        ApiCall(`movie/${tmdbid.id}`)
            .then((response) => {
                setGenres(response.genres);
                setMoviedata(response);
            })


    }, [tmdbid])
    const playerRef = useRef(null);

    useEffect(() => {
        // Initialize Plyr when the component mounts
        const player = new Plyr(playerRef.current, {
            // Plyr options (if any)
            // For example:
            controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
        });

        // Cleanup Plyr instance when the component unmounts
        return () => {
            if (player) {
                player.destroy();
            }
        };
    }, []);

    return (
        <div className='bg-gray-900 h-screen'>

            <div>
                <h1>Streaming M3U8 Video</h1>
                <video ref={playerRef}>
                    <source src={m3u8Url} type="video/mp4" />
                    {/* Add additional source elements if needed */}
                    <track kind="captions" src="https://s3.bunnycdn.ru/sub/cache3/subtitle/8364.vtt" srclang="en" label="English" default />
                </video>
            </div>
            <MoviePlayerDetails moviedata={moviedata} genres={genres} />

        </div>
    );
}

export default MoviePlayer