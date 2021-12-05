import React , {Component} from 'react';
import {BrowserRouter as Router , Switch} from 'react-router-dom'
import Naav from './nav/Nav'
import Footer from './footer/Footer'
import Section from './route/router';
import {DataProvider} from './contextApi/context'




  
class APP extends Component {

  render(){
  return ( 
  
  <DataProvider>
      <div className="App">
    <Router  key={Math.random()}>
     
        <Naav />
        <Switch >
          <Section/>
        </Switch> 
    
      <Footer/>
    </Router>
    </div>
  </DataProvider>
  
  )}
};

export default APP;
