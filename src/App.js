import React from "react";
import NavBar from "./Navbar";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import Messages from "./Messages";
import Home from "./Home";   
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min"; 
    
function App() {  
    return (
    <div>
        <NavBar />
            <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route path="/messages">
                <Messages />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            </Switch>
    </div>
    );
  }

  export default App;