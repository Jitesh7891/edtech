import React from 'react'
import "./alert.css"

export default function Alert() {
    return (
        <>
        <div className="alertcontainer alert alert-info" role="alert">
            <div className='upperAlertbox'>

            <div className='alertText'>
           The biggest sale of the year! 
            </div>
            <span className='' style={{fontWeight:'500'}}>
              Get upto 70%off on any course
            </span>

            </div>
            <div className='alertBottomtext'>
           12 Days Left!
            </div>
        </div>
        </>
    )
}
