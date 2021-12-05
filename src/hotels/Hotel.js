import { Component, Fragment } from "react";
import Rest from "../feature/Rest";
import TravelHotel from "../forms/HotelForms";
import $ from "jquery";

class Hotel extends Component {
  componentDidMount() {
    var wh = $(window).height(),
      nh = $(".navbar").innerHeight();
    $(function () {
      $(".ov").height(wh - nh);
    });
  }

  render() {
    return (
      <Fragment key={Math.random()}>
        <div className="ov">
          <div className="overlay"></div>
          <div className="container">
            <div className="bg">
              <TravelHotel />
            </div>
          </div>
        </div>
        <Rest />
      </Fragment>
    );
  }
}
export default Hotel;
