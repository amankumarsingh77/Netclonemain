import axios from "axios";


const options = {
    headers: {
        authorization: `Bearer ${import.meta.env.REACT_APP_TMDB_AUTH || "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTdjMzM5MzFjM2YzYzAzNTQxYTUzMGQyNGRmOTRmYyIsInN1YiI6IjYyYjg5MGI5YTYxZGUxMDNiNTY5Mzg0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VtguJxpV-T_hd86iDdW9XYfUrB3NH9vvW9l0Ycfgpg8"}`
    }
}
const ApiCall = async (route) => {

    const { data } = await axios.get("https://api.themoviedb.org/3/" + route, options)
    return data
}



export default ApiCall;