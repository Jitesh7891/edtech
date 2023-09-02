import React from 'react'
import './reviews.css'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

export default function Reviews() {
  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" className='carouselcurrent' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" className='carouselcurrent' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" className='carouselcurrent' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div className='carouselouter'>
    How learners like you WIN their dreams with EDU-WIN
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {/* <img src="..." class="d-block w-100" alt="..."/> */}
      <div className='reviewbox'>
        <div className="commas"><img src="/quotes.png" alt="" /></div>
        <div className="reviewboxdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus soluta error voluptas magni nulla possimus eveniet cumque similique eius!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quasi repudiandae voluptatibus autem architecto molestias! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus voluptatibus eveniet facilis maxime a laudantium sed eos iusto impedit numquam.</div>
        <div className="reviewuserinfobox">

        <div className="reviewuserimg"><img src="/students/s1.jpg" alt="" /></div>
        <div className="userreviewnameandrole">

        <div className="reviewusername">Hope Greyjoy</div>
        <div className="reviewuserdesc">Web Student</div>
        </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div className='reviewbox'>
        <div className="commas"><img src="/quotes.png" alt="" /></div>
        <div className="reviewboxdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus soluta error voluptas magni nulla possimus eveniet cumque similique eius!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quasi repudiandae voluptatibus autem architecto molestias! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus voluptatibus eveniet facilis maxime a laudantium sed eos iusto impedit numquam.</div>
        <div className="reviewuserinfobox">

        <div className="reviewuserimg"><img src="/students/s3.avif" alt="" /></div>
        <div className="userreviewnameandrole">

        <div className="reviewusername">Lara Mccoy</div>
        <div className="reviewuserdesc">Business Student</div>
        </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
       <div className='reviewbox'>
        <div className="commas"><img src="/quotes.png" alt="" /></div>
        <div className="reviewboxdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus soluta error voluptas magni nulla possimus eveniet cumque similique eius!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quasi repudiandae voluptatibus autem architecto molestias! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus voluptatibus eveniet facilis maxime a laudantium sed eos iusto impedit numquam.</div>
        <div className="reviewuserinfobox">

        <div className="reviewuserimg"><img src="/students/s2.jpg" alt="" /></div>
        <div className="userreviewnameandrole">

        <div className="reviewusername">Nemar </div>
        <div className="reviewuserdesc">Python Student</div>
        </div>
        </div>
      </div>
    </div>
  </div>



  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" className='reviewprevbtn'>
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" className='reviewnextbtn'>
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className='morereviews'>View More Customer Stories <NavigateNextOutlinedIcon/></div>
    </>
  )
}
