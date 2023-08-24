import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function HomePage() {
 

  const [countries, setCountries] =useState()

  useEffect(()=>{
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then((response)=>{
      console.log(response)
      setCountries(response.data.results)
    })
    .catch((error)=>{
        console.log(error)
    })

  },[])
  return (
    <div>WikiCountries: The guide</div>
  )
}

export default HomePage