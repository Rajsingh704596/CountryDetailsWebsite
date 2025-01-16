export const SearchFilter=({search,setSearch,filter,setFilter,countries,setCountries})=>{

    const handleInputChange=(event)=>{
        event.preventDefault();
        setSearch(event.target.value);
    }

    const handleSelectChange=(e)=>{
        e.preventDefault();
        setFilter(e.target.value);
    }

    const sortCountries=(value)=>{
        const sortCountry= [...countries].sort((a,b)=>{        //comparison operator using sort method
            return value === "asc"
            ? a.name.common.localeCompare(b.name.common)      //ascending sort logic
            : b.name.common.localeCompare(a.name.common);     //descending sort logic
        });
        setCountries(sortCountry);
    }
    return(
        <>
        <section className="flex">
            <input type="text" placeholder="Search Country" value={search} onChange={handleInputChange}/>

            {/* 2 button create with same fun */}
            <div><button onClick={()=>sortCountries("asc")}>Ascending</button></div>
            <div><button onClick={()=>sortCountries("dec")}>Descending</button></div>

            <div>
                <select value={filter} onChange={handleSelectChange}>
                    <option value="all">All</option>
                    <option value="africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
        </>
    )
}