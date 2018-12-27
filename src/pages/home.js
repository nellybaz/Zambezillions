import React, {Component} from 'react';
import Header from '../components/header';

import '../css/pages/home.css';

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    

   

    render(){
        return(
            <div className='Home'>
                <Header />
                <div className='home-wrapper'>
                    <p>Home page</p>
                </div>
            </div>
        );
    }
}


export default Home;



