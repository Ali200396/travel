import { Component, Fragment } from "react";
import axios from "axios";

class HotelForms extends Component {
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
          <option>{filteredName.name}</option>
          <option>{filteredName.translations.de}</option>
        </Fragment>
      );
    });
    return (
      <div>
        <h3>Find Cheap Hotel</h3>
        <form>
          <div className="row">
            <div className="col-12  col-md-6 col-lg-4">
              <div>
                <label>Check In</label>
                <input type="date" name="date" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <label>To </label>
              <input
                list="To"
                placeholder="selct place"
                onChange={this.handelChange2}
              />
              <datalist id="To">{theFilter2}</datalist>
            </div>
            <div className="col-6  col-md-6 col-lg-2">
              <label>Members</label>
              <input type="number" name="number" min="0" max="10" step="1" />
            </div>
            <div className="col-6  col-md-6 col-lg-2">
              <label>Room</label>
              <input type="number" name="number" min="0" max="10" step="1" />
            </div>

            <div className="col-12  col-md-6 col-lg-4">
              <div>
                <label>Check Out</label>
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
export default HotelForms;
