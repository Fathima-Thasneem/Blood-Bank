import React from "react";
import './home.css';
import { useNavigate } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import EndSlider from "./EndSlider";
export default function Home(){
    const navigate = useNavigate()
        return(<div>
<ImageSlider></ImageSlider>
<div class="form-group">
    <div class="contact-box">
        <form action="">
            <input href="contactforblood" type="submit" onClick={(e) => {
                e.preventDefault()
                navigate('/contactforblood')
            }} name="" value="Contact for Blood"/><br></br>
            <br></br>
            <input type="submit" onClick={(e) => {
                e.preventDefault()
                navigate('/signin')
            }} name="" value="Login"/>
            
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
            
            <div  class="input-register-box">
                <select>
                    <option hidden>Choose Your Blood Group</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                </select>
            </div>
                <br></br><br></br>
            <input type="submit" name="" value="Register"/>
        </form>
    </div>
    
    </div>
    <EndSlider></EndSlider>

    </div>
    
        )
      }


