import { useState } from 'react'
import './App.scss'
import Search from './component/Search.jsx'
import SearchResult from './component/SearchResult'

export default function App() {


    const [searchInput,setSearchInput] = useState('')
    const [searchRepo,setSearchRep] =useState('react')

    return (
        <main className="App">
         



            <Search  searchRepo ={searchRepo} setSearchRep ={setSearchRep}   searchInput={searchInput}  setSearchInput ={setSearchInput}  />

            <SearchResult   searchRepo ={searchRepo}   searchInput ={searchInput} />
        </main>
    )
}
