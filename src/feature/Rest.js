import { Component, Fragment } from "react";
import "./Rest.css";
import Plan from "./Plan";
import h1 from "../img/h1.jpg";
import h2 from "../img/h2.jpg";
import h3 from "../img/h3.jpg";

class Rest extends Component {
  render() {
    return (
      <Fragment key={Math.random()}>
        <section className="team ">
          <div className="container">
            <h1 className="text-center">THE BEST SEA TOURS</h1>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card mb-2 ">
                  <div className="cd">
                    <img className="card-top" src={h1} alt="Card  cap" />
                    <div className="ovo">
                      <p>
                        <span>Hotel: </span> 4 stars Hotel
                      </p>
                      <p>
                        <span>Transportation: </span>Price included
                        transportaion
                      </p>
                      <p>
                        <span>Children: </span> Free up to 5 years old
                      </p>
                      <button type="button" className="btn btn-warning">
                        Book Now
                      </button>
                    </div>
                  </div>

                  <div className="card-body">
                    <h4 className="card-title float-left">
                      Hurghada,<span>Egypt</span>
                    </h4>
                    <a href="#ww" className="card-text float-right">
                      from 190${" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card mb-2 ">
                  <div className="cd">
                    <img className="card-top" src={h2} alt="Card  cap" />
                    <div className="ovo">
                      <p>
                        <span>Hotel: </span> 4 stars Hotel
                      </p>
                      <p>
                        <span>Transportation: </span>Price included
                        transportaion
                      </p>
                      <p>
                        <span>Children: </span> Free up to 5 years old
                      </p>
                      <button type="button" className="btn btn-warning">
                        Book Now
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title float-left">
                      Barcelona,<span>Spania</span>
                    </h4>
                    <a href="#ww" className="card-text float-right">
                      from 120$
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card mb-2 ">
                  <div className="cd">
                    <img className="card-top" src={h3} alt="Card cap" />
                    <div className="ovo">
                      <p>
                        <span>Hotel: </span> 4 stars Hotel
                      </p>
                      <p>
                        <span>Transportation: </span>Price included
                        transportaion
                      </p>
                      <p>
                        <span>Children: </span> Free up to 5 years old
                      </p>
                      <button type="button" className="btn btn-warning">
                        Book Now
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title float-left">
                      Roma,<span>Italia</span>
                    </h4>
                    <a href="#ww" className="card-text float-right">
                      from 150${" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature text-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <i className="fas fa-plane"></i>
                <h3> Go anywhere</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore.
                </p>
              </div>
              <div className="col-sm-6 col-md-3">
                <i className="fas fa-book"></i>
                <h3> Keep it simple</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore.
                </p>
              </div>
              <div className="col-sm-6 col-md-3">
                <i className="fas fa-ship"></i>
                <h3>Travel your way</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore.
                </p>
              </div>
              <div className="col-sm-6 col-md-3">
                <i className="fas fa-hotel"></i>
                <h3>Hotel Bookings</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Plan />
      </Fragment>
    );
  }
}
export default Rest;
