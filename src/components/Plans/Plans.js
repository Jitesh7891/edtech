import React from 'react'
import './plans.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

export default function Plans() {
  return (
    <div className='plan-container'>

        <div className="planheading">
            Start Your Journey Now </div>
            
        <div className="planintro">Lorem, ipsum dolor sit amet consectetur Incidun adipisicing elit.<br/>  nesciunt illo, Officia laboriosam rerum cum.</div>
      
      <div className="planbody">

        <div className="plan plan1">
            <div className="planName">Basic Plan</div>

            <div className='planinformationbox'>

            <div className="planprice">
                <span className="planpricetext">$50</span>
                <span className="plnpricenormaltext">/month</span>
            </div>
            <div className="plandesc">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <button className="planbtn">Buy Now <ShoppingCartOutlinedIcon/> </button>
            <div className="planfeatures">
                <div className="feature"> <DoneOutlinedIcon/>Lorem ipsum dolor sit.</div>
                <div className="feature"> <DoneOutlinedIcon/>Lorem ipsum dolor sit.</div>
                <div className="feature"> <DoneOutlinedIcon/>Lorem ipsum dolor sit.</div>
                <div className="feature"> <DoneOutlinedIcon/>Lorem ipsum dolor sit.</div>
                <div className="feature"> <DoneOutlinedIcon/>Lorem ipsum dolor sit.</div>
            </div>
            </div>
        </div>

        <div className="plan plan2">
            <div className="planName">Premium Plan</div>

            <div className='planinformationbox'>
                
            <div className="planprice">
                <span className="planpricetext">$80</span>
                <span className="plnpricenormaltext">/month</span>
            </div>
            <div className="plandesc">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <button className="planbtn">Buy Now <ShoppingCartOutlinedIcon/></button>
            <div className="planfeatures">
                <div className="feature"> <DoneOutlinedIcon/>Lorem ipsum dolor sit.</div>
                <div className="feature"> <DoneOutlinedIcon/>Lorem ipsum dolor sit.</div>
                <div className="feature"> <DoneOutlinedIcon/>Lorem ipsum dolor sit.</div>
                <div className="feature"> <DoneOutlinedIcon/>Lorem ipsum dolor sit.</div>
                <div className="feature"> <DoneOutlinedIcon/>Lorem ipsum dolor sit.</div>
            </div>
            </div>
        </div>

        <div className="plan plan3">
            <div className="planName">Pro Plan</div>
            <div className='planinformationbox'>

            <div className="planprice">
                <span className="planpricetext">$120</span>
                <span className="plnpricenormaltext">/month</span>
            </div>
            <div className="plandesc">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <button className="planbtn">Buy Now <ShoppingCartOutlinedIcon/></button>
            <div className="planfeatures">
                <div className="feature"> <DoneOutlinedIcon/>Lorem ipsum dolor sit.</div>
                <div className="feature"> <DoneOutlinedIcon/>Lorem ipsum dolor sit.</div>
                <div className="feature"> <DoneOutlinedIcon/>Lorem ipsum dolor sit.</div>
                <div className="feature"> <DoneOutlinedIcon/>Lorem ipsum dolor sit.</div>
                <div className="feature"> <DoneOutlinedIcon/>Lorem ipsum dolor sit.</div>
            </div>
        </div>
            </div>


      </div>

    </div>
  )
}
