import { NavLink } from "react-router-dom";

function CountryCard({country}) {
    const{capital, flags, name, population, region }=country;
  return (
    <li className="card">
        <div className='container-card bg-blue-box'>
        <img 
                src={flags.svg} 
                alt={flags.alt} 
                style={{ maxWidth: '200px', height: 'auto' }}  // Responsive image
       />

            <div>
                <p className='card-title'>Country : {name.common.length===12? name.common.slice(0,12)+"..." :name.common }</p>
                <p className='card-description'>Population : {population.toLocaleString()}</p> {/* population get in right format (no.) */}
                <p className='card-description'>Region : {region}</p>
                <p className='card-description'>Capital : {capital[0]}</p>

                 <NavLink to={`/country/${name.common}`}> <button>Read More</button> </NavLink>         {/*here dynamic path set where name.common value pass dynamically according to click element */}
            </div>
        </div>
      
    </li>
  )
}

export default CountryCard
