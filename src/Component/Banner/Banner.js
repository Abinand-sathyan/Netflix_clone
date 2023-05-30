import React,{useEffect} from 'react'
import './Banner.css'
import {API_KEY,imageUrl} from "../../Constants/constant"
import axios  from "../../axios"
import { useState } from 'react'

function Banner() {
  const[movie,setMovie]=useState()
  // const[rand,randindex]=useState(0)
  

function getRandomItem(arr) {
const randomIndex = Math.floor(Math.random() * arr.length);
const item = arr[randomIndex];

  return item;
}

useEffect(()=>{
  axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
  setMovie(getRandomItem(response.data.results))

  })
},[])
  return (
    <div style={{backgroundImage:`url(${movie ?imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='tiltle'>{movie?movie.title:" "}</h1>
            <div className='Banner-buttons'>
            <button className='button'>play</button>
            <button className='button'>My list</button>
            </div>
            <h1 className='discription'>{movie?movie.overview:" "}</h1>
        </div>
        <div className='fade'></div>
</div>
  )
}

export default Banner
