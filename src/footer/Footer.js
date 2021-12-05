import { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <section className="footer1">
        <div className="container">
          <div className="row dd">
            <div className="col-md-4">
              <div className="info ">
                <h1>Travel Center</h1>
                <p className="fo ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore magna aliqua. Ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <h1>Tags</h1>
              <div className="tag">
                <ul className="list-unstyled" id="tag">
                  <li>Flight</li>
                  <li>Traveliing</li>
                  <li>Sale</li>
                  <li>Tours</li>
                  <li>Booking</li>
                  <li>Cars</li>
                  <li>Hotel</li>
                  <li>More</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <h1>Contact Us</h1>
              <div className="cont">
                <div>
                  <i className="fas fa-phone" style={{ color: "#ff6600" }}></i>{" "}
                  <span>+14325474747</span>
                </div>
                <div>
                  <i
                    className="fas fa-map-marker-alt"
                    style={{ color: "#ff6600" }}
                  ></i>
                  <span> kingstr, 34 55546 Benha </span>
                </div>
                <div>
                  <i
                    className="fas fa-envelope"
                    style={{ color: "#ff6600" }}
                  ></i>
                  <span> travel@gmail.com</span>
                </div>
                <div>
                  <i className="fab fa-edge" style={{ color: "#ff6600" }}></i>{" "}
                  <span> http://travelcenter.com</span>
                </div>
              </div>
            </div>
          </div>
          <p className=" text-center" style={{ marginTop: "10px" }}>
            copyright 2020 &copy; all right reserved
          </p>
        </div>
      </section>
    );
  }
}

export default Footer;
