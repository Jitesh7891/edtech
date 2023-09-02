import React from 'react'
import './categorycard.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Categorycard({img,title,desc,students}) {
  return (
   
      <div className="card"  >
  <img src={img} className="categoryimg card-img-top" alt="..."/>
  <div className="cardbody">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <div className='studentsenrol'>{students} students enrolled</div>
    <button href="#/" className="cardlast">Explore Course<ArrowOutwardIcon/> </button>
  </div>
</div>
 
  )
}
