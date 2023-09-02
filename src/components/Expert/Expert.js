import React from 'react'
import './expert.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Expert() {
  return (
    <div className='expertbox'>
        <div className="experthead">
            <span className='expertheading'>MEET OUR EXPERTS</span>
            <div className='expertbutton'>

            <button>VIEW ALL TEAM<ArrowOutwardIcon/></button>
            <button>JOIN OUR TEAM<ArrowOutwardIcon/></button>
            </div>
        </div>
        <div className="expertbody">

            <div className="expertblock">
                <div className="expertimgblock"><img src="/expert/exp1.jpg" alt="" srcset="" /></div>
                <div className="expertname">Mavis Connor</div>
                <div className="expertrole">Web Master</div>
                <div className="expertsocialmedia">
                    <div className="experticon"><FacebookIcon/></div>
                    <div className="experticon"><InstagramIcon/></div>
                    <div className="experticon"><LinkedInIcon/></div>
                    <div className="experticon"><TwitterIcon/></div>
                </div>
                <div className='expertlastblock'></div>
            </div>
            <div className="expertblock">
                <div className="expertimgblock"><img src="/expert/exp2.jpg" alt="" srcset="" /></div>
                <div className="expertname">John Traves</div>
                <div className="expertrole">Design Specialist</div>
                <div className="expertsocialmedia">
                    <div className="experticon"><FacebookIcon/></div>
                    <div className="experticon"><InstagramIcon/></div>
                    <div className="experticon"><LinkedInIcon/></div>
                    <div className="experticon"><TwitterIcon/></div>
                </div>
                <div className='expertlastblock'></div>
            </div>
            <div className="expertblock">
                <div className="expertimgblock"><img src="/topcourseinstrctor/python.jpg" alt="" srcset="" /></div>
                <div className="expertname">Nora Haymen</div>
                <div className="expertrole">Python Expert</div>
                <div className="expertsocialmedia">
                    <div className="experticon"><FacebookIcon/></div>
                    <div className="experticon"><InstagramIcon/></div>
                    <div className="experticon"><LinkedInIcon/></div>
                    <div className="experticon"><TwitterIcon/></div>
                </div>
                <div className='expertlastblock'></div>
            </div>
            <div className="expertblock">
                <div className="expertimgblock"><img src="/expert/exp3.jpg" alt="" srcset="" /></div>
                <div className="expertname">Gal Cruise </div>
                <div className="expertrole">Management Expert</div>
                <div className="expertsocialmedia">
                    <div className="experticon"><FacebookIcon/></div>
                    <div className="experticon"><InstagramIcon/></div>
                    <div className="experticon"><LinkedInIcon/></div>
                    <div className="experticon"><TwitterIcon/></div>
                </div>
                <div className='expertlastblock'></div>
            </div>


        </div>
      
    </div>
  )
}
