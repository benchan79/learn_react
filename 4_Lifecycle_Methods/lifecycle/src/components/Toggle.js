import Clock from "./Clock";
import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHideClock: true,
      preciseMode: false,
    };
    this.changeMode = this.changeMode.bind(this);
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent() {
    this.setState({ showHideClock: !this.state.showHideClock });
  }

  changeMode() {
    this.setState({ preciseMode: !this.state.preciseMode });
  }

  render() {
    const { preciseMode } = this.state;
    const { showHideClock } = this.state;
    return (
      <div>
        <button onClick={() => this.hideComponent()}>Toggle Clock</button>
        <p />
        <button onClick={() => this.changeMode()}>Toggle Precise Mode</button>
        <p />
        {showHideClock && <Clock isPrecise={preciseMode} />}
      </div>
    );
  }
}

export default Toggle;
