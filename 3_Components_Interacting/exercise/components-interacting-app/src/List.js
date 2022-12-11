import React from 'react';
// Living musician List instance has two children - Sachiko and Harvey Sid Fisher
// Living cat musician List instance has one child - Nora the Piano Cat
export class List extends React.Component {
	render() {
		let titleText = `Favorite ${this.props.type}`;
		if (this.props.children instanceof Array) {
			titleText += 's';
		}
		return(
			<div>
				<h1>{titleText}</h1>
				<ul>{this.props.children}</ul>
			</div>
		);
	}
}