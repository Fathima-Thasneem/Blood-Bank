import React from 'react';
import Dropdown from './ContactForBlood';
import Home from './Home';
import SignIn from './SignIn';

class App extends React.Component{
  render(){
    return(<div>
             <Home></Home>
             {/* <SignIn></SignIn> */}
             {/* <Dropdown></Dropdown> */}
      </div>
    )
  }
  }

export default App;