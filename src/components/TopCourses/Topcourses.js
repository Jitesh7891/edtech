import React from 'react'
import './topcourses.css'
import Topcourse from './Topcourse'

export default function Topcourses() {
  return (
    <div className='topoursesbox'>
      <div className="topcoursesheading">
        Top Courses For You
      </div>
      <div className='topcoursesbody'>

      <Topcourse
      heading={'Python'}
      topcoursestar={'4.8'}
      topcoursetime={'150hours'}
      topcoursetitle={'Computer and programming'}
      topcourseimg={'/topcourseimg/python.jpg'}
      topcourseinstructor={'Nora Haymen'}
      topcourseprice={'$25'}
      topcourseinstructorimg={'/topcourseinstrctor/python.jpg'}
      />
      <Topcourse
      heading={'Web Development'}
      topcoursestar={'4.6'}
      topcoursetime={'150hours'}
      topcoursetitle={'Computer and programming'}
      topcourseimg={'/topcourseimg/web.jpg'}
      topcourseinstructor={'Safak Carat'}
      topcourseprice={'$21'}
      topcourseinstructorimg={'/topcourseinstrctor/web.jpg'}
      />
      <Topcourse
      heading={'Graphic Design'}
      topcoursestar={'4.4'}
      topcoursetime={'120hours'}
      topcoursetitle={'Design and Graphics'}
      topcourseimg={'/topcourseimg/graphic.jpg'}
      topcourseinstructor={'Billy Morris'}
      topcourseprice={'$23'}
      topcourseinstructorimg={'/topcourseinstrctor/graphic.jpg'}
      />

      </div>

    </div>
  )
}
