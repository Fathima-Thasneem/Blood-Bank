import React from "react";
import { useNavigate } from "react-router-dom";
import './search.css';

export default function Search() {
    const navigate = useNavigate()

    return (
        <div className="search-container" >

            <div className="search-box">
                <form action="">
                    <input href="contactforblood" type="submit" onClick={(e) => {
                        e.preventDefault()
                        navigate('/search-by-blood')
                    }} name="" value="Search by Blood Group" /><br></br>
                    <br></br>
                    <input type="submit" onClick={(e) => {
                        e.preventDefault()
                        navigate('/search-donor')
                    }} name="" value="Search Donor by Place" />

                </form>
            </div>
        </div>
    )
}