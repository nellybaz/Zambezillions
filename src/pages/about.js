import React, {Component} from 'react';
import '../css/components/header.css';


class Header extends Component{
    render(){
        return(
            <div className='Header'>

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
                            <div className='header-gap'>
                        </div>
            </div>
        );
    }
}


export default Header;
