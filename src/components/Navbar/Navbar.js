import React from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Navbar() {
    const nothing=()=>{

    }
  return (
    <nav className='NavbarContainer'>
      <div className="Navbarlogo">
        EDU-WIN
      </div>
      <div className="dropdown">
  <button className="navbarDrop " type="button" onClick={nothing} data-bs-toggle="dropdown" aria-expanded="false">
    Top Courses
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#/">Web Development</a></li>
    <li><a className="dropdown-item" href="#/">App Development</a></li>
    <li><a className="dropdown-item" href="#/">Data Structures and Algorithms </a></li>
    <li><a className="dropdown-item" href="#/">Artifcial Intelligence</a></li>
    <li><a className="dropdown-item" href="#/">Data Science</a></li>
    <li><a className="dropdown-item" href="#/">Cloud Computing</a></li>
    <li><a className="dropdown-item" href="#/">Marketing</a></li>
    <li><a className="dropdown-item" href="#/">Sales Expert</a></li>
    <li><a className="dropdown-item" href="#/">Product Management</a></li>

  </ul>
</div>


<div className="searchbar">
<SearchIcon className='searchicon'/>
                    <input type="text" placeholder="Search for anything " className="searchInput" />
                </div>

<a href="#/" className="navbarContact">Contact Us</a>

<a href="#/" className="navbarContact">Get Hired</a>

<ShoppingCartOutlinedIcon className='shoppingicon'/>



<button type="button" className="navbarBtn  ">Login</button>
<button type="button" className="navbarBtn2  ">Sign Up</button>


    </nav>
  )
}
