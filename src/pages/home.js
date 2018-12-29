import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Body from './body';
import '../css/components/footer.css';
import '../css/pages/home.css';
import '../css/pages/body.css';


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
                </div>

                <div className='Footer'>
                 <Footer />
                </div>

                <div className='Body'>
                <Body />
                <div className='Body-wrapper'>
                </div>
                </div>
                
            </div>
        );
    }
}


export default Home;