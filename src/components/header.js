import React, { Component } from 'react';
import '../css/components/header.css';

import logo from '../images/sample_logo.png';


class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <div className='top-header-bar'>
                    
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className='social' >Get Social</div>
                    
                </div>


                <div className='nav-bar'>
                    <div className='nav-links-div'>
                        <a href="#home">Home</a>
                        <a href="#news">Projects</a>
                        <a href="#Lions">About Lions</a>

                        <a href="#home">Home</a>
                        <a href="#news">Projects</a>
                        <a href="#Lions">About Lions</a>
                        
                    </div>
                    <div className='img-div'>
                        <img src={logo} />
                    </div>

                    <div className='donate-div'>
                        <h5>Zambezillions</h5>

                        <button>DONATE</button>
                    </div>
                    
                </div>
                {/* <div className='header-wrapper'>
                    <div className='img-logo-div'>
                        <img src="https://www.pvschools.net/cms/lib/AZ01902189/Centricity/Domain/39/Greenway_Mascot_NoSignature.png" />
                    </div>

                    <div className="navbar">
                        <a href="#home">Home</a>
                        <a href="#news">Projects</a>
                        <a href="#Lions">About Lions</a>


                        <div className="dropdown">
                            <button class="dropbtn">About Us
                        <i className="fa fa-caret-down"></i>
                            </button>

                            <div className="dropdown-content">
                                <a href="#">Our Approach</a>
                                <a href="#">Our Team</a>
                                <a href="#">Our Mission Statement</a>
                                <a href="#">Board if trustees</a>
                                <a href="#">Annual Report</a>
                                <a href="#">Five Yeras Strategic Plan</a>
                                <a href="#">Sponsors</a>
                                <a href="#">Publications</a>
                            </div>


                        </div>
                        <a href="#Faceboob">FacebooK</a>
                        <a href="#Instagram">Instagram</a>
                        <a href="#">Twitter</a>
                    </div>


                </div>
                <div className='header-gap'>
                </div> */}
            </div>
        );
    }
}
export default Header;
