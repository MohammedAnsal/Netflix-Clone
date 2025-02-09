import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {

  return (

    <div className="home">
      
      <Navbar />

      <div className="hero">
        <img className="banner-image" src={hero_banner} alt="" />

        <div className="hero-caption">
          <img className="caption-img" src={hero_title} alt="" />

          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>

          <div className="hero-btn">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>

            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>

          <div className="title-cards">
            <TitleCards/>
          </div>
          
        </div>
      </div>

      <div className="more-cards">
        <TitleCards
          title={"Popular"}
          category={"popular"}
        />
        <TitleCards
          title={"Top Rated"}
          category={"top_rated"}
        />
        <TitleCards
          title={"Upcoming"}
          category={"upcoming"}
        />
      </div>

      <Footer />
    </div>
  );

}

export default Home
