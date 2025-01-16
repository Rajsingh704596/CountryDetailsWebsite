import '../css/about.css'
import country from '../api/CountryDetail.json'
function About() {

  return (
    <section className="section-about "> 
      <h2 className='container-title'>Here are the Interesting Facts</h2>
      <br />
      <div className='grid gradient-cards'>
        {country.countries?.map((curData)=>{
          const{area,name,capital, region, population,languages}=curData;
          return(
            <div key={area} className='card' >
              <div className='container-card bg-blue-box'>
              <p className='card-title'>Country: {name}</p>
              <p className='card-description'>Capital: {capital}</p>
              <p className='card-description'>Region: {region}</p>
              <p className='card-description'>Population: {population}</p>
              <p className='card-description'>Language: {languages.map((curElem)=>{
                     return <>{curElem}, </>
              })}
              </p>
            </div>
            </div>
          )
        })}
      </div>
      
    </section>
  )
}

export default About
