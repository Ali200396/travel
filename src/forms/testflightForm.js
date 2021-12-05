import { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
class CarForms extends Component {
  state = {
    fromCountry: "",
    toCountry: "",
    from: "",
    to: "",
    date: "",
    error: "",
  };
  handelChange1 = (e) => {
    e.preventDefault();
    this.setState({
      from: e.target.value,
    });
  };

  handelChange2 = (e) => {
    e.preventDefault();
    this.setState({
      to: e.target.value,
    });
  };

  getTicket(e) {
    e.preventDefault();
    const fromCountry = this.state.from;
    const toCountry = this.state.to;
    return (
      <Link
        to={{
          pathname: `/tickets`,
          data: [{ fromCountry: fromCountry, toCountry: toCountry }],
        }}
      />
    );
  }

  get = (e) => {
    e.preventDefault();

    const fromCountry = this.state.from;
    const toCountry = this.state.to;
    this.setState({
      fromCountry: fromCountry,
      toCountry: toCountry,
    });
  };

  render() {
    return (
      <Fragment key={Math.random()}>
        <div>
          <h3>Find Cheap Flights</h3>
          <form>
            <div className="row">
              <div className="col-12  col-md-6 col-lg-4">
                <label>from</label>
                <input
                  type="text"
                  name="fromCountry"
                  placeholder="selct place"
                  value={this.state.from}
                  onChange={this.handelChange1}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <label>To </label>
                <input
                  type="text"
                  name="toCountry"
                  placeholder="selct place"
                  value={this.state.to}
                  onChange={this.handelChange2}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12  col-md-6 col-lg-4">
                <div>
                  <label>Departing</label>
                  <input type="date" name="date" />
                </div>
              </div>

              <div className="col-12  col-md-12 col-lg-4">
                <div>
                  <label></label>

                  <button type="submit" onClick={this.get}>
                    <NavLink className="nav-link" to="/tickets">
                      {" "}
                      ghghg{" "}
                    </NavLink>
                  </button>
                  <button type="submit" onClick={this.get}>
                    {" "}
                    ddddd{" "}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}
export default CarForms;
