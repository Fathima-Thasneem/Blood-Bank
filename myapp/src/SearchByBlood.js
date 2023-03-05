import './contactforblood.css';
import React, { useState,select,setPlace,place } from 'react';

export default function SearchByBlood(){

  const [place, setPlace] = useState(0);
  const { error, isLoaded, items } = useState;

return(<div>

  
  <div  className="select-place">
    <h2>Search by Blood Group</h2>
  <select onChange={(event) => {setPlace (event.target.value) ;console.log(event.target.value)}}>

      <option hidden>- - SELECT - -</option>
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
{  place != 0 &&  
<table className="place-table">
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Phone Number</th>
                          <th>Place</th>

                      </tr>
                  </thead>
                  <tbody>
                  
                      <tr >
                          <td>1</td>
                          <td>Thesni</td>
                          <td>9876543210</td>
                          <td>MALAPPURAM</td>            
                        </tr>
                        <tr >
                          <td>2</td>
                          <td>Thesni</td>
                          <td>9876543210</td>
                          <td>MALAPPURAM</td>            
                        </tr>
                        <tr >
                          <td>3</td>
                          <td>Thesni</td>
                          <td>9876543210</td>
                          <td>MALAPPURAM</td>            
                        </tr>
                  </tbody>
    </table>
  }



</div>


)



}