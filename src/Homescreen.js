import React from 'react'
import Requests from './requests';
import Row from './Row.js';
import Banner from './Banner'
import Nav from './Nav';

function Homescreen() {
  return (
    <div>
      <Nav/>
      <Banner/>

      <Row title="NETFLIX ORIGINALS" fetchUrl= {Requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries}/>
    </div>
  )
}

export default Homescreen
