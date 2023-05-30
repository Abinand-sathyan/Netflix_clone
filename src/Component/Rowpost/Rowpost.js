

import React from 'react'
import YouTube from 'react-youtube'
import { useEffect,useState } from 'react'
import {imageUrl,API_KEY} from '../../Constants/constant'
import axios from '../../axios'
import './Rowpost.css'
function RowPost(props) {
    const [movies,setMovies]=useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
              setMovies(response.data.results)
        }).catch(err=>{
            alert('Network error')
        })
    })
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    }

    const handleMovie =(id)=>{
          axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-Us`).then((response)=>{
            if(response.data.results.length !== 0){
                setUrlId(response.data.results[0])
            }
          })
    }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'Smallposter' : 'poster' }src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
      </div>
   
      {urlId && <YouTube  opts={opts}   videoId={urlId.key}/>}

    </div>
  )
}

export default RowPost