import './contactforblood.css';
import React, { useState,select,setPlace,place } from 'react';

export default function SearchDonor(){

  const [place, setPlace] = useState(0);
  const { error, isLoaded, items } = useState;

return(<div>

  
  <div  className="select-place">
    <h2>Search Donor by Place</h2>
  <select onChange={(event) => {setPlace (event.target.value) ;console.log(event.target.value)}}>

      <option hidden>- - SELECT - -</option>
      <option>KASARKODE</option>
      <option>KANNUR</option>
      <option>KOZHIKODE</option>
      <option>WAYANAD</option>
      <option>MALAPPURAM</option>
      
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