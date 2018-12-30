import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Body from './body';
import '../css/components/footer.css';
import '../css/pages/home.css';


import Typing from 'react-typing-animation';
import { bounceInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

//images

import approach from '../images/approach.png';



class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }




    render() {

        const styles = {
            bounceInRight: {
                animation: 'x 2s',
                animationName: Radium.keyframes(bounceInRight, 'bounce'),
            },

            section1:{
                background:'#E3D9B9',
                height:'400px',
                width:'100%',
                
            }
        }
        return (
            <div className='Home'>
                <Header />

                <div className='home-wrapper'>
                    <div className='jumbo'>
                        <div className='left'>
                            <Typing speed={3}>
                                <h5 className='typed-mission'>Our mission is to maintain healthy and viable populations of African wild dogs and other large carnivores in Zimbabwe, as well as the habitats and prey species on which they depend. We achieve this through a combination of research, conservation and education, with a focus on improving school education standards and community livelihoods around key protected areas.</h5>
                            </Typing>

                        </div>

                        <div className='right'>
                            <StyleRoot>
                            <img style={styles.bounceInRight} src={approach} />
                            </StyleRoot>

                        </div>

                    </div>

                   <section style={styles.section1} className='section1'>
                       
                   </section>

                </div>


                <div className='Footer'>
                    <Footer />
                </div>
            </div>
        );
    }
}


export default Home;