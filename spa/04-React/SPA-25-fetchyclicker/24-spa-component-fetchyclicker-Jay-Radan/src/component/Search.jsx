import { useState } from "react"

const Search = ({searchInput,setSearchInput ,searchRepo,setSearchRep}) => {


const handleSearch = (e) =>{

   setSearchInput(e.target.value)

}


 const  submitForm =(e)=>{

e.preventDefault()


setSearchRep(searchInput)
 }


  return (

    <form onSubmit={submitForm}>
          
        <h3>search repositorie</h3>
        <input value={searchInput}    onChange={handleSearch}   type="text" />
    
    </form>
  
  )
}

export default Search