import { Component, Fragment } from "react";
import "./Tickets.css";
import {DataContext} from '../contextApi/context'

class FlightTickets extends Component {
  
  static contextType = DataContext;
  state = {
    Flight: [
      {
        src: "https://beebom.com/wp-content/uploads/2018/12/Lufthansa-Logo.jpg",
        style: {
          height: "43px",
        },
        label: "rgb(13, 28, 83)",
      },
      {
        src: "https://beebom.com/wp-content/uploads/2015/02/airline-logos-qatar-e1424574584611.png",
        style: {
          height: "26px",
        },
        label: "rgb(90, 5, 49)",
      },
      {
        src: "https://beebom.com/wp-content/uploads/2015/02/airline-logos-swiss.png",
        style: {
          height: "23px",
        },
        label: "rgb(230, 26, 56)",
      },
      {
        src: "https://beebom.com/wp-content/uploads/2018/12/Singapore-Airlines-logo.jpg",
        style: {
          height: "46px",
        },
        label: "rgb(252, 178, 50)",
      },
      {
        src: "https://beebom.com/wp-content/uploads/2018/12/Lufthansa-Logo.jpg",
        style: {
          height: "43px",
        },
        label: "rgb(13, 28, 83)",
      },
      {
        src: "https://beebom.com/wp-content/uploads/2015/02/airline-logos-qatar-e1424574584611.png",
        style: {
          height: "26px",
        },
        label: "rgb(90, 5, 49)",
      },
      {
        src: "https://beebom.com/wp-content/uploads/2015/02/airline-logos-swiss.png",
        style: {
          height: "23px",
        },
        label: "rgb(230, 26, 56)",
      },
      {
        src: "https://beebom.com/wp-content/uploads/2018/12/Singapore-Airlines-logo.jpg",
        style: {
          height: "46px",
        },
        label: "rgb(252, 178, 50)",
      },
    ],
  };

  render() {
    const { from, to, da1, da2 } = this.context;

    const getRandomInt = () => {
      return Math.floor(Math.random() * (400 - 200) + 200);
    };
    const Cell = (props) => {
      const { index } = props;
      return (
        <div id="firstDisplay">
          <div className="row">
            <div className="col-3">
              <div id="flightDetail">
                <div id="detailLabel" style={{ fontWeight: "bold" }}>
                  {" "}
                  From
                </div>
                <div
                  id="detailLabel"
                  style={{ fontWeight: "900", fontSize: "15px" }}
                >
                  {from}
                </div>
                <div id="detailLabel">{` ${from}   airport`}</div>
              </div>
            </div>
            <div className="col-3">
              <div id="detailLabel">
                <i
                  className="fas fa-plane "
                  style={{
                    width: "30px",
                    fontSize: "16px",
                    marginLeft: "30%",
                    marginTop: "12px",
                  }}
                ></i>
              </div>
              <div id="detailLabel">
                <img
                  className="edit "
                  style={this.state.Flight[index].style}
                  src={this.state.Flight[index].src}
                  alt="plane"
                />
              </div>
            </div>
            <div className="col-3">
              <div className="flightDetail">
                <div id="detailLabel" style={{ fontWeight: "bold" }}>
                  {" "}
                  to
                </div>
                <div
                  id="detailLabel"
                  style={{ fontWeight: "900", fontSize: "15px" }}
                >
                  {to}
                </div>
                <div id="detailLabel">{` ${to}   airport`}</div>
              </div>
            </div>
            <div className="col-3">
              <div id="flightDetail">
                <div id="price"> {getRandomInt()}$</div>
                <span className="book"> Book Now</span>
              </div>
            </div>
          </div>
        </div>
      );
    };

    const DataArr = Array(8).fill(0).map(Number.call, Number);

    if (from && to && da1) {
      return (
        <>
          <div className=" container">
            <div id="" className="navDeatail">
              Your Trip
              <div id="tripDest">
                {" "}
                {from.slice(0, 3)} - {to.slice(0, 3)}
                {/* <div id="oneWay">One Way</div> */}
              </div>
              {da1} - {da2}
            </div>
            <div className="row">
              <div className="col-12 col-md-8">
                <div id="headerText">Select Flight</div>
                {DataArr.map((val, i) => (
                  <Cell key={i} index={i} />
                ))}
              </div>
              <div className="col-md-4">
                <div>
                <h1>  here is filter still in progress</h1>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } 
    else {
      return (
        <>
          <div className=" container text-center p-5">
            <div>
              <h1 >No Tickes sorry!</h1>
              <p>Please sure that you have filled the required Inputs</p>
            </div>
          </div>
        </>
      );
    }
  }
}
export default FlightTickets;
