import React from 'react';
import Banner from '../Banner';
import "./HomeScreen.css";
import Nav from '../Nav';
import requests from '../Requests';
import Row from '../Row';

function HomeScreen() {
  return( 
  <div className='homeScreen'>
      <Nav />
      <Banner />
      <Row 
      title="Trending Now"
      fetchUrl={requests.fetchTrending}
      isLargeRow />
      <Row 
      title="Action Movies"
      fetchUrl={requests.fetchActionMovies} />
      <Row 
      title="Comedy Movies"
      fetchUrl={requests.fetchComedyMovies} />
      <Row 
      title="Documentaries"
      fetchUrl={requests.fetchDocumentaries} />
      <Row 
      title="Horror Movies"
      fetchUrl={requests.fetchHorrorMovies} />
      <Row 
      title="Romance Movies"
      fetchUrl={requests.fetchRomanceMovies} />
      <Row 
      title="Top Rated"
      fetchUrl={requests.fetchTopRated} />
      

      {/* test rows delete later*/}


      <Row 
      title="Action Movies"
      fetchUrl={requests.fetchActionMovies} />
      <Row 
      title="Comedy Movies"
      fetchUrl={requests.fetchComedyMovies} />
      <Row 
      title="Documentaries"
      fetchUrl={requests.fetchDocumentaries} />
      <Row 
      title="Horror Movies"
      fetchUrl={requests.fetchHorrorMovies} />
      <Row 
      title="Romance Movies"
      fetchUrl={requests.fetchRomanceMovies} />
      <Row 
      title="Top Rated"
      fetchUrl={requests.fetchTopRated} />


  </div>
  );
}

export default HomeScreen;
