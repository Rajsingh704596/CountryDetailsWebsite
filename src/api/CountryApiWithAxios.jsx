import axios from "axios";

//Create instance of axios
const api=axios.create(
    {
        baseURL:"https://restcountries.com/v3.1",
    }
)


// HTTP Get Method-
export const getCountryData=()=>{
    return api.get('/all?fields=name,population,region,capital,flags');
}

// HTTP Get Method for the Individual Country details-
export const getCountryIndividualData=(name)=>{
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
}


