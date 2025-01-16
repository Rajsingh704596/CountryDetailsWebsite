import '../css/about.css'
import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom"
import { getCountryIndividualData } from "../api/CountryApiWithAxios";

export const CountryDetails=()=>{
    const params = useParams();          //useParams hook use for getting parameter from url path (here we get id which is object form)
    // console.log(params);             //o/p- {id:'India'}

     const[isPending,startTransition]=useTransition();
     const[country,setCountry]=useState(null);

     useEffect(()=>{
        startTransition(async()=>{
        const res=await getCountryIndividualData(params.id);                  //params.id pass
         console.log(res);     // o/p-{data:Array(1), status:200, statusText:'', headers:AxiosHeaders, ...}
        if(res.status===200){
        setCountry(res.data[0]);       //further data k and-er 0 index ko target kar na hai jis me details hai 
        }

        //  console.log(Object.keys(res.data[0].name.nativeName));
        });
     },[])
      
     if(isPending) return <p>loading...</p>

     if (!country) return null; // Render nothing if country data is not yet available

    return(
        <>
        <section className='body-individual'>
            <div className="container-card bg-white-box">

                <img src={country.flags.svg} alt={country.flags.alt} />
                <div className='country-content'>
                    <p className='card-title'>{country.name.official}</p>
                   
                   <div>
                    <p className="card-description">
                    <span>  Native Names:</span>
                    {Object.keys(country.name.nativeName).map((key)=>country.name.nativeName[key].common).join(",")}   {/*here dynamic key also pass */} {/*object m sid-ha map method use nhi kar sk te hai is li ye ph-le Object.keys method ka use kar-ege then keys k basis pr inside value ko get kar sk te hai here nativeName m multiple keys hai jis ki value m bhi common key ki value ko print kar na hai */}
                    </p>
                    <p className="card-description">
                        <span>Population:</span>
                        {country.population.toLocaleString()}
                    </p>
                    <p className="card-description">
                        <span>Region:</span>
                        {country.region}
                    </p>
                    <p className="card-description">
                        <span> Sub Region: </span>
                        {country.subregion}
                    </p>
                    <p className="card-description">
                        <span> Capital: </span>
                        {country.capital}
                    </p>
                     <p className="card-description">
                        <span>Top level Domain:</span>
                            {country.tld[0]}
                     </p>
                     <p className="card-description">
                        <span>Currencies:</span>
                            {Object.keys(country.currencies).map((curElem)=>country.currencies[curElem].name).join(",")}
                     </p>
                     <p className="card-description">
                        <span>Languages:</span>
                            {Object.keys(country.languages).map((key)=>country.languages[key]).join(",")}
                     </p>

                    </div>


                </div>
                    <div>
                        <NavLink to="/country"><button>Go Back</button></NavLink>
                    </div>
            </div>
        </section>

        </>
)
}