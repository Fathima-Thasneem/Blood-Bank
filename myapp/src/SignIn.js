import React, { useState } from "react";
import './signin.css';

    
  export default function SignIn(){

    const handleSubmit = (username, password) => {
      console.log(username, password);
    };
    return (
      <div className="App">
        <SignInForm onSubmit={handleSubmit} />
      </div>
    );
  }

function SignInForm({onSubmit}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEnable, setEnable] = useState(true);
  const handleKeyUp = () => {
    if (username.length > 0 && password.length > 0) setEnable(false);
    else setEnable(true);
  };
  return (
    <div class="box">
      <h2>Login</h2>
      <div class="inputBox">
        <label for="">User Name</label>
        <input
          type="text"
          onKeyUp={handleKeyUp}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <br />
      <br />
      <div class="inputBox">
        <label for="">Password</label>
        <input
          type="password"
          onKeyUp={handleKeyUp}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <br />
      <br />

      <input type="submit" name="" value="Login"/>

      {/* <button
        type="submit"
        // id="button-input"
        disabled={isEnable}
        onClick={() => onSubmit(username, password)}
      >
        Login
      </button> */}
    </div>
  );
}



  

    // componentDidMount() {

    //     fetch(`${process.env.REACT_APP_API_HOST}/`)
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           this.setState({
    //             isLoaded: true,
    //             items: result
    //           });
    //         },
    //         (error) => {
    //           this.setState({
    //             isLoaded: true,
    //             error
    //           });
    //         }
    //       )
    //   }
    // render(){
    //   return(<div class="box">
    //   <h2>Login</h2>
    //   <form action="">
    //       <div class="inputBox">
    //           <input type="text" name="" required=""/>
    //           <label for="">Username</label>
    //       </div>
    //       <div class="inputBox">
    //           <input type="password" name="" required=""/>
    //           <label for="">Password</label>
    //       </div>
    //       <input type="submit" name="" value="Login"/>
          
    //   </form>
      {/* {(() => {
              if(this.state.isLoaded){
                return this.state.items.map(item => (
                 <President read={"read"} key={item.id} username={item.username} password ={item.password} ></President>
                ))
              }
              
            })()} */}
  // </div>
  //     )
  //   }
  //   }
  
