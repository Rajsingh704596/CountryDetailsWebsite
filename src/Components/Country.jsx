import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/CountryApiWithAxios";
import CountryCard from "./CountryCard";
import { SearchFilter } from "./SearchFilter";


export const Countries=()=>{
 
    const[countries,setCountries]=useState([]);
    const[isPending, startTransition]=useTransition();

    //^for search or filter useState create
    const[search,setSearch]=useState();
    const[filter,setFilter]=useState("all");

     // console.log(search,filter)

    //useTransition Hook- it is use for update state without blocking the UI.
        //^ isPending: Ek boolean value hai jo bat-ata hai ki transition ab-hi pending hai ya na hi.
        //^ startTransition: Ye ek function hai jo aap ko transition update ko start kar ne ke li ye call kar na ho ta hai.

    useEffect(()=>{
      startTransition(async()=>{
         const res= await getCountryData();
        // console.log(res);         //o/p-Object 
                                      // config  :  {transitional: {…}, adapter: Array(3), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
                                      //  data  :   (250) [{…}, {…},  …]
                                      //  headers  :   AxiosHeaders {cache-control: 'public, immutable, max-age=31556926', content-length: '25452', content-type: 'application/json'}
                                      //  request :   XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
                                      //  status  :   200
                                      //  statusText  :   ""

        if(res.status===200){
         setCountries(res.data);
        }
      });
    },[]);

    //for handle loading data
    if(isPending) return <h1>Loading...</h1>

   

    //^ here is the main logic for search-
    const searchCountry=(Country)=>{
      if(search){
        return Country.name.common.toLowerCase().includes(search.toLowerCase())               //e.g user type pa   so country print like Nepal
      }
      //agar search nhi hai to 
      return countries;
    }

     //^ here is the main logic for filter-
     const filterRegion=(country)=>{
      if(filter==="all") return country;
      //agar false hai 
      return country.region===filter;
     }

     const filterCountries= countries.filter((country)=> searchCountry(country) && filterRegion(country));   //2 fun pass  //or i-ssi variable se loop use kar ui m show kar-ege

    return(
        <section className="section-about">
          
          {/* SearchFilter component */}
          <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries}/>

          <ul className='grid gradient-cards'>
            {
              filterCountries.map((curCountry,index)=>{
                return <CountryCard key={index} country={curCountry}/>
              })  
            }
          </ul>

        </section>
    )
}