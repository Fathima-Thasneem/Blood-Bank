import React from "react";
import './home.css';
import Slider from './Components/Slider/Slider';
import Slideshow from './Advertisement';

class Home extends React.Component{


    render(){
        return(<div>
                         {/* <Slider></Slider> */}

                <div class="contact-box">
        <form action="">
            <input type="submit" name="" value="Contact for Blood"/><br></br>
            <br></br>
            <input type="submit" name="" value="Login"/>
            
        </form>
    </div>
        
        <div class="register-box">
        <h2>DONATE BLOOD</h2>
        <form action="">
            <div class="input-register-box">
                <input type="text" name="" required=""/>
                <label for="">Your Name</label>
            </div>
            <div class="input-register-box">
                <input type="text" name="" required=""/>
                <label for="">Your Place</label>
            </div>
            <div class="input-register-box">
                <input type="email" name="" required=""/>
                <label for="">Email</label>
            </div>
            <div class="input-register-box">
                <input type="mobile" name="" required=""/>
                <label for="">Phone Number</label>
            </div>
            
            <input type="submit" name="" value="Choose Your Blood Group"/>
                <br></br><br></br>
            <input type="submit" name="" value="Register"/>
        </form>

    </div>
            
    </div>
    
    
        )
      }
}

export default Home;