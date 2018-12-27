import React, {Component} from 'react';
import '../css/components/header.css';

import logo from '../images/logo.png';

class Header extends Component{
    render(){
        return(
            <div className='Header'>
                <div className='header-wrapper'>
                    <div className='img-logo-div'>
                        <img src={logo} />
                    </div>
                    
                    <div className='header-nav'>
                        <ul>
                            <li className='active'>Home</li>
                            <li>About Us</li>
                            <li>Projects</li>
                            <li>About African WIld Dogs</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>fb</li>
                            <li>twitter</li>
                            <li>instagram</li>
                        </ul>
                    </div>
                </div>

                <div className='header-gap'>
                    
                </div>


            </div>
        )
        }
    }
export default Header;