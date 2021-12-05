import { Component, Fragment } from "react";
import axios from "axios";

class TravelCar extends Component {
  state = {
    names: [],
    search1: "",
    search2: "",
  };
  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      console.log(res.data);
      this.setState({
        names: res.data,
      });
    });
  }

  handelChange1 = (e) => {
    this.setState({
      search1: e.target.value,
    });
  };

  handelChange2 = (e) => {
    this.setState({
      search2: e.target.value,
    });
  };
  render() {
    const { names, search2 } = this.state;

    const theFilter2 = names.map((filteredName) => {
      return search2 === "" ? (
        (filteredName = null)
      ) : (
        <Fragment>
          <option key={Math.random()}>{filteredName.name}</option>
          <option>{filteredName.translations.de}</option>
        </Fragment>
      );
    });
    return (
      <div>
        <h3>Find Cheap Car</h3>
        <form>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <label>To </label>
              <input
                list="To"
                placeholder="selct place"
                onChange={this.handelChange2}
              />
              <datalist id="To">{theFilter2}</datalist>
            </div>

            <div className="col-12  col-md-6 col-lg-4">
              <div>
                <label>Time</label>
                <input type="time" name="date"  />
              </div>
            </div>

            <div className="col-12  col-md-6 col-lg-4">
              <div>
                <label>Departing</label>
                <input type="date" name="date" />
              </div>
            </div>
            <div className="col-12  col-md-6 col-lg-4">
              <div>
                <label>Returning</label>
                <input type="date" name="date" />
              </div>
            </div>
            <div className="col-12  col-md-12 col-lg-4">
              <div>
                <label></label>
                <input type="button" value="Search " />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default TravelCar;
