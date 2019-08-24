import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import YelpSearch from './components/yelp-search'
import Header from './components/_header'


function App() {
 
  return (
    <>
      <a href='/restaurants'> Search</a>
      <YelpSearch />

    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))