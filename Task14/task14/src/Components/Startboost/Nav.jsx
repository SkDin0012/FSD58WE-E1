import React from 'react';

const Nav=()=>{
    <nav className='navbar navbar-expand-lg navbar-ligh fixed-top'>
        <div className='container'>
            <a className='navbar-brand' href='#'>Start Bootstarp</a>
            <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#navbarResponsive">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id="avbarResponsivev">
                <ul className='navbar-nav ml-auto'>
                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Nav;