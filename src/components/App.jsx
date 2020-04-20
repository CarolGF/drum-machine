import React, { Component } from "react";
import DrumPad from "./DrumPad";
import drumKeys from "./drumKeys";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Press a key to start playing!",
    };
  }

  changeDisplay = (name) => {
    this.setState({ display: name });
  };

  render() {
    const { display } = this.state;

    return (
      <div id='drum-machine'>
        <h1>{display}</h1>
        <div className='drum-buttons'>
          {drumKeys.map((button) => (
            <DrumPad
              changeDisplay={this.changeDisplay}
              name={button.name}
              id={button.key}
              src={button.src}
            />
          ))}
        </div>
        <footer>by Carolina</footer>
      </div>
    );
  }
}

export default App;
