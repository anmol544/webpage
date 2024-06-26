import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props)
{ 

    return (
        <>
        <div className="App">
       
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold"  href="www.google.com">
            {props.title}   
          </a>
          <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="www.google.com">
                  Home
                </a>
                <hr className="d-block d-md-none"/>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.google.com" >
                  Features
                </a>
                <hr className="d-block d-md-none"/>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.google.com">
                  Pricing
                </a>
                <hr className="d-block d-md-none"/>
              </li>
              
            </ul>
          </div>
        </div>
       </nav>
       </div>
      

    </>
    )
}
Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    description:PropTypes.string,
  
}
Navbar.defaultProps = {
    title:"default title",
    description:"default description",
   
}