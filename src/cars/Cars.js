import { Component, Fragment } from "react";
import CarForms from "../forms/CarForms";
import Rest from "../feature/Rest";
import $ from "jquery";


class Cars extends Component {

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
              <CarForms />
            </div>
          </div>
        </div>
        <Rest />
      </Fragment>
    );
  }
}
export default Cars;
