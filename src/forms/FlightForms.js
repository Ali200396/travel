import { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../contextApi/context";

class FlightForms extends Component {

  static contextType = DataContext;

  render() {
    const { names, from, to, da1, da2, get, radioValue, handelChange } =this.context;

    const theFilter1 = names.map((filteredName) => {
      return from === "" ? (
        (filteredName = null)
      ) : (
        <>
          <option key={Math.random()}>{filteredName.name}</option>
          <option key={Math.random()}>{filteredName.translations.de}</option>
        </>
      );
    });

    const theFilter2 = names.map((filteredName) => {
      return to === "" ? (
        (filteredName = null)
      ) : (
        <>
          <option key={Math.random()}>{filteredName.name}</option>
          <option key={Math.random()}>{filteredName.translations.de}</option>
        </>
      );
    });
    return (
      <div>
        <h3>Find Cheap Flights</h3>
        <form onSubmit={get}>
          <input
            type="radio"
            name="radioValue"
            value="One Way"
            checked={radioValue === "One Way"}
            onChange={handelChange}
          />
          <span>One Way</span>
          <input
            type="radio"
            name="radioValue"
            value="Return"
            checked={radioValue === "Return"}
            onChange={handelChange}
          />
          <span>Return </span>
          <div className="row">
            <div className="col-12  col-md-6 col-lg-4">
              <label>from</label>
              <input
                list="From"
                name="from"
                type="text"
                placeholder="selct place"
                value={from}
                onChange={handelChange}
                required
              />

              <datalist id="From" key={Math.random()}>
                {theFilter1}
              </datalist>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <label>To </label>
              <input
                list="To"
                type="text"
                name="to"
                placeholder="selct place"
                value={to}
                onChange={handelChange}
              />

              <datalist key={Math.random()} id="To">
                {theFilter2}
              </datalist>
            </div>
            <div className="col-6  col-md-6 col-lg-2">
              <label>Kids</label>
              <input type="number" name="number" min="0" max="10" step="1" />
            </div>
            <div className="col-6  col-md-6 col-lg-2">
              <label>Adults</label>
              <input type="number" name="number" min="0" max="10" step="1" />
            </div>
          </div>
          <div className="row">
            <div className="col-12  col-md-6 col-lg-4">
              <div>
                <label>Departing</label>
                <input
                  type="date"
                  name="da1"
                  value={da1}
                  onChange={handelChange}
                />
              </div>
            </div>
            <div className="col-12  col-md-6 col-lg-4">
              <div>
                <label>Returning</label>
                <input
                  type="date"
                  name="da2"
                  value={da2}
                  onChange={handelChange}
                />
              </div>
            </div>
            <div className="col-12  col-md-12 col-lg-4">
              <div>
                <label></label>
                <button type="submit" onSubmit={() => get} >
                  <Link style={{color:"#fff"}}  to="/flight-tickets">
                    Get ticket
                  </Link> 
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default FlightForms;
