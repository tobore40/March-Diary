
import './App.css';
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Service from './components/service';
import Contact from './components/Contact';
import Cv from './components/Cv';
import { css } from "@emotion/core";
import SkewLoader from "react-spinners/SkewLoader";
import { useState, useEffect } from "react";

import { Route, BrowserRouter as Router, Switch, } from "react-router-dom";
import Load from './Load';
// import NavigationBar from './components/NavigationBar';


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const override = css`
    position: absolute;
    top: 45%;
    left: 45%;
    
`;
 

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
},[])
  return (
    <div >
      {
        isLoading ?
          <SkewLoader color={"red"} loading={isLoading} css={override} size={40} className="spin"/>
          :<Router>
        <Navbar />
        {/* <NavigationBar /> */}
        <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/About" component={About} />
      <Route path="/Skills" component={Skills} />
      <Route path="/Service" component={Service} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Cv" component={Cv} />
          </Switch>
        <Load />  
      <Footer />
      </Router>
      }
     
    </div>
  );
}

export default App;
