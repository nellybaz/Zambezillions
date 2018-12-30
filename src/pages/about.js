import React, {Component} from 'react';
import '../css/components/header.css';
import Header from '../components/header';

class About extends Component{
    render(){
        return(
           <div className='about'>
                <Header />
               about page
           </div>
        );
    }
}
export default About;
