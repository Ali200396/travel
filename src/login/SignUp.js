import { Component, Fragment } from "react";
import "./Login.css";
import Joi from "joi-browser"; //npm i joi-browser
import { NavLink } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  validate = () => {
    const errors = {};
    //Clone State
    const state = { ...this.state };
    delete state.errors; // not to do this to errors obj in the state itself
    const res = Joi.validate(state, this.schema, { abortEarly: false }); //false to return all errors not only the first
    if (res.error === null) {
      this.setState({ errors: {} });
      return null;
    }

    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }

    this.setState({ errors });
    return errors;
  };

  handleChange = (e) => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value; //using name attribute to know which of them will be change
    this.setState(state);
  };

  render() {
    return (
      <Fragment>
        <div className="login">
          <div className="container">
            <div className="header">
              <h1 className="text-center">Create an account</h1>
            </div>
            <div className="segment">
              <form>
                <div className="row">
                  <div className="col-sm-6" style={{ fontSize: 13 }}>
                    <input
                      type="submit"
                      fluid
                      value=" Login With FaceBook"
                      onSubmit={this.handleSubmit}
                      style={{
                        fontSize: 13,
                        backgroundColor: "#49639F",
                        color: "#fff",
                      }}
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="submit"
                      fluid
                      value=" Login with Google"
                      onSubmit={this.handleSubmit}
                      style={{
                        fontSize: 13,
                        backgroundColor: "#DF4A32",
                        color: "#fff",
                      }}
                    />
                  </div>
                </div>
                <input name="name" placeholder="Name" type="text" />
                <input
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                />
                <input
                  name="username"
                  placeholder="Username"
                  value={this.state.useremname}
                  onChange={this.handleChange}
                  id="username"
                  type="text"
                />
                {this.state.errors.username && (
                  <div className="alert alert-danger">
                    {this.state.errors.username}
                  </div>
                )}
                <input
                  className="form-control login_input "
                  placeholder="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  id="password"
                  type="Password"
                />
                {this.state.errors.password && (
                  <div className="alert alert-danger">
                    {this.state.errors.password}
                  </div>
                )}
                <div className="row">
                  <div className="col-sm-12">
                    <input
                      className="active"
                      type="submit"
                      fluid
                      value=" Sign Up"
                      onSubmit={this.handleSubmit}
                    />
                  </div>
                  <div className="col-sm-12">
                    <NavLink to="login">
                      <input
                        type="submit"
                        fluid
                        value=" you have already an account: Login"
                        style={{ fontSize: 14 }}
                      />{" "}
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
