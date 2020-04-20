import React, { Component } from "react";

class DrumPad extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (event) => {
    if (event.keyCode === this.props.id.charCodeAt()) {
      this.playSound();
    }
  };

  changeColor = () => {
    const button = document.getElementById(this.props.name);
    button.style.backgroundColor = "#ccedd2";

    setTimeout(function () {
      button.style.backgroundColor = "#94d3ac";
    }, 100);
  };

  playSound = () => {
    this.audio.currentTime = 0;
    this.audio.play();
    this.props.changeDisplay(this.props.name);
    this.changeColor();
  };

  render() {
    const { id, name, src } = this.props;
    return (
      <div onClick={this.playSound} className='drum-pad' id={name}>
        {id}
        <audio
          ref={(ref) => (this.audio = ref)}
          src={src}
          className='clip'
          id={id}
        ></audio>
      </div>
    );
  }
}

export default DrumPad;
