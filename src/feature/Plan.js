import { Component } from "react";
import "./Plan.css";
import theimage1 from "../img/h3.jpg";
import theimage2 from "../img/h2.jpg";
import theimage3 from "../img/h3.jpg";
class Plan extends Component {
  state = {
    img: [theimage1, theimage2, theimage3],
    header: [
      "Amsterdam",
      "Paris",
      "Egypt",
      "Dubai",
      "Amestrdam",
      "Berlin",
      "Dahab",
      "Hurghada",
      "Aswan",
    ],
    list: ["Flüge", "Hotel", "Car"],
  };

  render() {
    const theImage = this.state.img;
    const img = theImage.map((im) => {
      return <img key={Math.random()} src={im} alt="dsd" />;
    });

    const thelist = this.state.list;
    const list = thelist.map((lis) => {
      return (
        <li className="list-item" key={Math.random()}>
          <a className="link" href="#ww">
            {lis}
          </a>
        </li>
      );
    });
    const theloop = this.state.header;
    const loob = theloop.map((hed) => {
      return (
        <div className="all" key={Math.random()}>
          <div className="image">{img}</div>
          <div className="detail">
            <h5 className="h5">{hed}</h5>
            <div>
              <ul className="ul" key={Math.random()}>
                {list}
              </ul>
            </div>
          </div>
        </div>
      );
    });
    return (
      <section className="plane container">
        <div>
          <h1>Plan your perfect trip</h1>
          <p>
            Search Flights, Hotels & Car Hire to our most popular destinations
          </p>
        </div>
        <div className="loob" id="loob">
          {loob}
        </div>
      </section>
    );
  }
}

export default Plan;
