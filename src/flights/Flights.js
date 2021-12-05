import  { Component } from 'react'
import FlightForms from '../forms/FlightForms'
import Rest from '../feature/Rest'
import {DataContext} from '../contextApi/context'
import './Flights.css'
import $ from "jquery";


class Flights extends Component {

  static contextType = DataContext;

  componentDidMount() {
    var wh = $(window).height(),
      nh = $(".navbar").innerHeight();
    $(function () {
      $(".ov").height(wh - nh);
    });
  }

  render() {
    const { radioValue, names,from,to,da1,da2,get, handelChange} = this.context;
    console.log(names)
    return (
      < >
        <div className="ov">
          <div className="overlay"></div>
          <div className="container">
            <div className="bg">
              <FlightForms
                radioValue = {radioValue}
                names={names}
                from={from}
                to={to}
                da1={da1}
                da2={da2}
                get={get}
                handelChange = {handelChange}
              />
            </div>
          </div>
        </div>
        <Rest />
      </>
    )
  }
}
export default Flights;