import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom'
// import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title , category}) => {

  const cardsRef = useRef()
  const [apiData , setApiData] = useState([]) 

  /*----{API FOR MOVIES}----*/

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzlhYTgwNjI3MzNiYmVlMzkyYWM2YjAyMzI4ZjM4OSIsIm5iZiI6MTcyMTIxNjA2My41MzE4OCwic3ViIjoiNjY5N2FhY2UxMzJhMjg3ZTM5N2M4ZmE1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.2rf7GDa6QkLjZQAHxZpYOjlGYcijWqlcvL8oM_XLjSk",
    },
  };

  //  Setting Scroll :-

  const handleWeel = (event) => {
    
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY;
    
  }

  /*----{Use Effect Area}----*/
  
  useEffect(() => {

      fetch(
        `https://api.themoviedb.org/3/movie/${
          category ? category : "now_playing?language=en-US&page=1"
        }`,
        options
      )
        .then((response) => response.json())
        .then((response) => setApiData(response.results))
        .catch((err) => console.error(err));
    
    cardsRef.current.addEventListener("wheel", handleWeel);
    
  } , [])
  
  
  return (

    <div className='title-cards'>

      <h2>{title ? title : "Popular on Netflix"}</h2>

      <div className="card-list" ref={cardsRef}>

        {apiData.map((card, indx) => {
          
          return (

            <Link to={`/player/${card.id}`} className="card" key={indx}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
            
          );

        })}

      </div>

    </div>
    
  )
}

export default TitleCards
