import React, { useEffect, useState } from 'react'
import './Player.css'
import back_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const [apiData, setApiData] = useState({

    name: "",
    key: "",
    published_at: "",
    type : ""
    
  })

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzlhYTgwNjI3MzNiYmVlMzkyYWM2YjAyMzI4ZjM4OSIsIm5iZiI6MTcyMTIxNjA2My41MzE4OCwic3ViIjoiNjY5N2FhY2UxMzJhMjg3ZTM5N2M4ZmE1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.2rf7GDa6QkLjZQAHxZpYOjlGYcijWqlcvL8oM_XLjSk",
    },
  };

  /*----{Use Effect Area}----*/

  useEffect(() => {
    
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));


  } , [])

  return (


    <div className='player'>

      <img onClick={() => {navigate(-2)}} className='back-icon' src={back_icon} alt="" />

      <iframe width='90%' height='90%' frameBorder='0' title='trailer' src={`https://WWW.youtube.com/embed/${apiData.key}`}  allowFullScreen></iframe>
      
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
      
    </div>

  )

}

export default Player
