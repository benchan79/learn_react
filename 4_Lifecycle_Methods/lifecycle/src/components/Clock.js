import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

	render() {
		return (
			<div>
				{this.props.isPrecise
					? this.state.date.toISOString()
					: this.state.date.toLocaleTimeString()}
			</div>
		)
	}

	startInterval() {
		let delay;
		// Updates more frequently if in precise mode
		delay = this.props.isPrecise ? 100 : 1000
		this.intervalID = setInterval(() => {
			this.setState({ date: new Date() });
		}, delay);
	}	

	// Before Refactoring
	// componentDidMount() {
	// 	const oneSecond = 1000;
	// 	this.intervalID = setInterval(() => {
	// 		this.setState({ date: new Date() });
	// 	}, oneSecond);
	// }

	// After refactoring
	componentDidMount() {
		this.startInterval();
	}

	componentDidUpdate(prevProps) {
		// Step 1: Check current mode
		if (this.props.isPrecise === prevProps.isPrecise) {
			return;
		}
		// Step 2: Clear existing interval
		clearInterval(this.intervalID);
		// Step 3: Start a new interval 
		this.startInterval();
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}
}

export default Clock;