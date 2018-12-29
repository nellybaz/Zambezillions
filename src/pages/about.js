import React, {Component} from 'react';
import '../css/components/header.css';


class Header extends Component{
    render(){
        return(
            <div className='Header'>
                <div className='header-wrapper'>
                    <div className='img-logo-div'>
                        <img src= "https://www.pvschools.net/cms/lib/AZ01902189/Centricity/Domain/39/Greenway_Mascot_NoSignature.png" />
                    </div>
                    
                    <div className='header-nav'>
                        <ul>
                            <li className='active'>Home</li>
                            <li>About Us</li>
                            <li>Projects</li>
                            <li>About African WIld Dogs</li>
                            <li>Home</li>
                            <li>Gallery</li>
                            <li>Donate</li>
                            <li>fb</li>
                            <li>twitter</li>
                            <li>instagram</li>
                        </ul>
                    </div>
                </div>
                    <div className='header-gap'>
                </div>
            </div>
        );
    }
}
export default Header;
