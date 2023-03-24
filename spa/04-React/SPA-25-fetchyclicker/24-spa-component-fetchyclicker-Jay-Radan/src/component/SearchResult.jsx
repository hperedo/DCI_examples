import { useEffect, useState } from "react"

import Spinner from "./Spinner.jsx"
const SearchResult = ({searchRepo}) => {


const [repos,setRepos] =useState(null)


useEffect(()=>{


    fetch(`https://api.github.com/search/repositories?q=${searchRepo}&per_page=100&page=1`)
    .then(response => response.json())
    .then(result => setRepos(result.items.map(obj =>obj.full_name )))


},[searchRepo])


  return (
    <div>
        <p>search result</p>
         

         {repos ?   repos.map((name,i) => <li key={i} >{name}</li>) : <Spinner />}

    </div>
  )
}

export default SearchResult