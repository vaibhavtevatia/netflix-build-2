import React, { useEffect, useState } from 'react';
import './Banner.css'
import requests from './Requests';
import axios from './axios';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length -1)
                ]
            );
            // console.log(request.data.results)

            return request;
        }
        fetchData();
    },[])

    function truncate(str, n){
        return str?.length > n ? str.substr(0,n-1) + '...' : str;
    }

  return (
  <header 
      className='banner' 
      style={{
      backgroundSize:"cover",
      backgroundPosition: "top center",
      backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
  }}>
      <div className='banner__contents'>
          <h1 className='banner__title'>
              {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className='banner__buttons'>
              <button className='banner__button'>Play</button>
              <button className='banner__button'>My List</button>
          </div>
          <h1 className='banner__description'>
              {truncate(movie?.overview, 150)}
//               {movie?.overview}
          </h1>
      </div>

      <div className='fadeBottom' />
  </header>
  );
}

export default Banner;
