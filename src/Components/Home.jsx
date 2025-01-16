import { FaArrowCircleRight } from "react-icons/fa";

function Home() {
  return (
    <div className="h-container">
      <div className="h-child">

        <div className="hero-section">  
          <h2>Discover the Wonders of Earth</h2>
          <p className="h-content">Explore continents, countries, and cultures with a touch of a button. Our World Atlas showcases geographical information like never before—detailed, dynamic, and interactive. Get insights into population data, climate patterns, and geographical features, all presented in an engaging and visually rich format.</p>
          <button className="btn"> Start Exploring<FaArrowCircleRight /></button>
        </div>

        <div>
        <img src="./image/world.jpg" alt="World picture" />
        </div>


      </div>
     
    </div>
  )
}

export default Home
