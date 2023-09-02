import React from 'react'
import './categories.css'
import Categorycard from './Categorycard'

export default function Categories() {
    return (
        <>

            <div className='categorycontainer'>

                <div className='categoryheading'>Discover from wide range of Courses</div>

                <div className=' subcategorycontainer '>

                <Categorycard students={117612} img={'categoryimg/arts.jpg'} desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit.  "} title={'Design'}/>
                <Categorycard students={198218} img={'categoryimg/cp3.jpg'} desc={"Lorem ipsum dolor sit amet consectetur.adipisicing elit.   "} title={'Computer Programming'}/>
                <Categorycard students={80176} img={'categoryimg/business.jpg'} desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit.  "} title={'Business'}/>


                </div>

                <div className=' subcategorycontainer' >

                <Categorycard students={120732} img={'categoryimg/marketing.jpg'} desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit.  "} title={'Marketing'}/>
                <Categorycard students={36271} img={'categoryimg/photo.jpg'} desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit.  "} title={'Photography'}/>
                <Categorycard students={346251} img={'categoryimg/science.jpg'} desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit.  "} title={'Science'}/>

                </div>

            </div>


        </>
    )
}