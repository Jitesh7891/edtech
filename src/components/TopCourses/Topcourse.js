import React from 'react'
import './topcourse.css'
import TaskIcon from '@mui/icons-material/Task';
import StarIcon from '@mui/icons-material/Star';
import QueryBuilderTwoToneIcon from '@mui/icons-material/QueryBuilderTwoTone';



export default function Topcourse({heading,topcoursestar,topcoursetime,topcoursetitle,topcourseimg,topcourseinstructor,topcourseprice,topcourseinstructorimg}) {
  return (
    <div className='topcoursebox'>

      <div className="topcourseleft">
        <div className="topcourseheading">{heading}</div>
        <div className="topcoursedescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure reiciendis placeat doloribus similique id molestias ex expedita, consectetur fuga odit.</div>
        <div className="topcoursereview">
          <span><TaskIcon className='topcourseicon'/>{topcoursetitle}</span>
          <span><StarIcon className='topcourseicon'/>{topcoursestar}</span>
          <span><QueryBuilderTwoToneIcon className='topcourseicon'/>{topcoursetime}</span>
        </div>
    
      <div className="topcourseinstructor">
          <span><img className='topcourseinstructorimg' src={topcourseinstructorimg} alt="" /></span>
          <span className='topcourseinstructor'>{topcourseinstructor}</span>
        </div>
      </div>

      <div className="topcoursemiddle">
        <div><img className='topcourseimg' src={topcourseimg}  alt="" /></div>
      </div>

      <div className="topcourseright">
        <div>
          <span className='topcourseprice'>{topcourseprice}</span>
          <span>/session</span>
        </div>

        <button className='topcoursebutton'>Register Now</button>
      </div>
    </div>
  )
}
