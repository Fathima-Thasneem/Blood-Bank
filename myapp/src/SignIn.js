import React from "react";
import './signin.css';

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }


    // componentDidMount() {

    //     fetch(`${process.env.REACT_APP_API_HOST}/getAllBooks`)
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
    render(){
      return(<div class="box">
      <h2>Login</h2>
      <form action="">
          <div class="inputBox">
              <input type="text" name="" required=""/>
              <label for="">Username</label>
          </div>
          <div class="inputBox">
              <input type="password" name="" required=""/>
              <label for="">Password</label>
          </div>
          <input type="submit" name="" value="Login"/>
          
      </form>
      {/* {(() => {
              if(this.state.isLoaded){
                return this.state.items.map(item => (
                 <Book read={"read"} key={item.id} title={item.name} author ={item.author} img_url={item.img}></Book>
                ))
              }
              
            })()} */}
  </div>
      )
    }
    }
  
  export default SignIn;