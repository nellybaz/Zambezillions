import React, {Component} from 'react';

class Main extends Component{
    render(){
        return(
            <div className='Our-mission'>
            <div className = "Mission-statement">
                <p>
                    <h3>
                        <strong>
                                Our mission is to maintain healthy and viable populations of <br></br>
                                African wild dogs and other large carnivores in Zimbabwe, as <br></br>
                                well as the habitats and prey species on which they depend.<br></br>
                                We achieve this through a combination of research, conservation <br></br>
                                and education, with a focus on improving school education standards<br></br> 
                                and community livelihoods around key protected areas.<br></br>
                                <br></br>
                                The African Wildlife Conservation Fund is a registered trust in <br></br>
                                Zimbabwe (Registered Trust Number 0000476/2012) and a registered <br></br>
                                non-profit organisation in the United States (FIN: 26-0571535). <br></br>
                                The work is done with the support of the Zimbabwe Parks and Wildlife<br></br>
                                Management Authority and the Research Council of Zimbabwe.
                        </strong>
                    </h3>
                </p>

                <div className = "our-mission-donate">
                    <br></br>
                    <br></br>
                    <button>Donate</button>
                </div>
                </div>


                <div className ="The-videos">
                    <div className = "video1">
                        <p>AWCF Education Cluster Competition <br></br>3 Minute Video</p>
                        <iframe width="500" height="315"src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                    </div>

                    <div className = "sm-page">
                        
                        <p>
                            <strong>
                            <br></br>
                            <br></br>
                                    <h2>
                                        <p>
                                            Follow Our Facebook Feed
                                        </p>
                                    </h2>
                            </strong>
                        </p>
                    </div>
                </div>


                <div className = "AWC-Porjects">
                    <div className = "AWC1">
                        <img src="http://africanwildlifeconservationfund.org/wp-content/uploads/2017/09/Lowveld_Wild_Dog.jpg" height="200" width="300"></img>
                        <p>Project one</p>
                    </div>

                    <div className = "AWC2">
                    <img src="http://africanwildlifeconservationfund.org/wp-content/uploads/2017/09/Gonerezhou_Predator_Project.jpg" height="200" width="300"></img>
                        <p>Project Two</p>
                    </div>

                    <div className = "AWC2">
                    <img src="http://africanwildlifeconservationfund.org/wp-content/uploads/2017/09/Lowveld_Wild_Dog.jpg" height="200" width="300"></img>
                        <p>Project Three</p>
                    </div>

                    <div className = "AWC2">
                    <img src="http://africanwildlifeconservationfund.org/wp-content/uploads/2017/09/Gonerezhou_Predator_Project.jpg" height="200" width="300"></img>
                        <p>Project Three</p>
                    </div>
                </div>


                <div className = "Africans-wilddogs">
                    <p>
                        <strong>
                                <h2>
                                    Learn about African wilddogs
                                </h2>
                        </strong>
                    </p>
                </div>


                <div className = "Generat-donate-site">
                <div className = "Donations">
                    <p>
                        <h1>
                            <p className = "story-about-donation">Donate to the Zambezillions.</p>
                        </h1>
                        <p> <br></br>
                            AWCF is a field-based, hands-on conservation organisation with exceptionally low overheads.<br></br> 
                            All donations go directly to where they are most needed, including for wages for education <br></br>
                            officers and wild dog trackers, education resources for schools, equipment (e.g. radios, <br></br>
                            GPS units, satellite collars, motorbikes) and operational costs (fuel, vehicle maintenance). <br></br>
                            Every little helps and we’re able to make any donation go a long way, so please consider supporting us. <br></br>
                        </p>
                    </p>
                </div>


                <div className = "Donate-box">
                <div className = "Donate-box2">
                <br></br>
                <br></br>
                    <button>Donate</button>
                </div>
                </div>
                </div>
                

                <div className = "partners">
                    <p>
                        <strong>
                                <h1>
                                    Our Partners
                                </h1>
                        </strong>
                    </p>
                </div>
                    

                <div className = "logos">
                    <div className = "partners-logos1">
                        <img src="http://africanwildlifeconservationfund.org/wp-content/uploads/2017/09/Nat_Parks-300x131.png" height="100" width="200"></img>
                        </div>

                        <div className = "partners-logos2">
                            <img src="http://africanwildlifeconservationfund.org/wp-content/uploads/2017/09/Gonarezhou-300x131.png" height="100" width="200"></img>
                        </div>

                        <div className = "partners-logos3">
                            <img src="http://africanwildlifeconservationfund.org/wp-content/uploads/2017/09/Save_Valley_Conservancy-1.png" height="100" width="200"></img>
                        </div>

                        <div className = "partners-logos4">
                        <img src="http://africanwildlifeconservationfund.org/wp-content/uploads/2017/12/Wild_Program.png" height="100" width="200"></img>
                </div>
            </div>

        </div>
        );
    }   
}


export default Main;
