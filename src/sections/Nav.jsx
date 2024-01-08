import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/mern-media-logo.png';
import avatarPlaceholder from "../assets/avatar.svg"

import { MdSearch } from 'react-icons/md';

const Nav = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [username, setUsername] = useState('')
    const navigate = useNavigate();
    const searchhandle = (event) => {
        console.log("reached")
        if (event.key == "Enter") {

            navigate(`../search/${searchQuery}`)
        }

    }
    useEffect(() => {
        const authHeader = localStorage.getItem("token");
        fetch("http://localhost:3000/me", {
            headers: {
                Authorization: `Bearer ${authHeader}`
            }
        })
            .then((response) => {
                response.json().then((data) => {
                    setUsername(data.username);
                })


            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, [username]);

    console.log("Token", username)


    return (
        <div className="bg-gray-800 w-full flex items-center justify-between px-4 py-2 ">
            <div className="flex items-center">
                <i className="fas fa-film text-white text-3xl mr-2"></i>
                <a href='/'>
                    <img src={logo} className="w-14 h-14" alt="Logo"></img>
                </a>
            </div>
            <div className="flex items-center max-sm:hidden">
                {/* Navigation links */}

                <a href="/" className="text-white text-sm uppercase px-3 py-2 font-medium hover:text-gray-300">Home</a>
                <a href="#" className="text-white text-sm uppercase px-3 py-2 font-medium hover:text-gray-300">Genre</a>
                <a href="#" className="text-white text-sm uppercase px-3 py-2 font-medium hover:text-gray-300">Country</a>
                <a href="#" className="text-white text-sm uppercase px-3 py-2 font-medium hover:text-gray-300">Movies</a>
                <a href="#" className="text-white text-sm uppercase px-3 py-2 font-medium hover:text-gray-300">TV Shows</a>
                <a href="#" className="text-white text-sm uppercase px-3 py-2 font-medium hover:text-gray-300">Top IMDB</a>
                {/* Add other navigation links as needed */}
            </div>
            <div className="flex justify-center items-center">

                <input
                    type="text"
                    placeholder="Search"
                    className="rounded-s-2xl pl-4 pr-10 py-2 w-auto relative overflow-hidden max-sm:w-36 h-9"
                    onChange={e => setSearchQuery(e.target.value)}

                ></input>
                <button className="bg-red-600 text-white px-4 py-2 rounded-e-2xl font-bold uppercase text-sm flex items-center ml-1" onKeyDown={searchhandle} onClick={() => navigate(`../search/${searchQuery}`)}>
                    <i className="fas fa-play mr-2"></i> Search
                </button>
            </div>
            {/* Profile section with avatar */}
            {username ? (
                // Render if user is logged in
                <div className="flex items-center">
                    <div className="ml-4 cursor-pointer">
                        <img src={avatarPlaceholder} className="w-10 h-10 rounded-full" alt="Avatar"></img>
                    </div>
                </div>
            ) : (
                // Render if user is not logged in
                <div>
                    <button className='bg-[#26D8E8] p-2 m-2 rounded-md' onClick={e => navigate("../login")}>
                        Login/signup
                    </button>

                </div>

            )}

        </div>
    );
}





export default Nav;
