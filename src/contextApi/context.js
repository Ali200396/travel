import React, { Component } from "react";
import axios from "axios";
export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    names: [],
    radioValue: "Return",
    from: "",
    to: "",
    da1: "",
    da2: "",
    error: "",
  };
  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      this.setState({
        names: res.data,
      });
      console.log(this.state.names);
    });
  }

  handelChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  
  get = (e) => {
    e.preventDefault();
    const from = this.state.from;
    const to = this.state.to;
    const da1 = this.state.da1;
    const da2 = this.state.da2;
    this.setState({
      from,
      to,
      da1,
      da2,
    });
  };

  render() {
    const { names, radioValue, from, to, da1, da2 } = this.state;
    const { handelChange, get } = this;
    return (
      <DataContext.Provider
        value={{ radioValue, names, from, to, da1, da2, handelChange, get }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
