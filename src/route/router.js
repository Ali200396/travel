import React, { Component } from 'react'
import { Route} from 'react-router-dom'
import Home from '../flights/Flights'
import Hotel from '../hotels/Hotel';
import Cars from '../cars/Cars';
import Login from '../login/Login';
import SignUp from '../login/SignUp';
import FlightTickets from '../tickets/FlightTickets'


export class Section extends Component {
    render() {
        return (
            <section>
                    <Route exact path="/" component={Home}/> 
                    <Route path="/Hotel" component={Hotel}/>
                    <Route path="/Car" component={Cars}/> 
                    <Route path="/login" component={Login}/> 
                    <Route path="/sign-up" component={SignUp}/>
                    <Route path="/flight-tickets" component={FlightTickets }/>  
            </section>
        )
    }
}

export default Section