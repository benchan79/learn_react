import React from 'react';

export class NavBar extends React.Component {
	render() {
		const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
		const navLinks = pages.map(page => {
			return (
				<a href={'/' + page}>
					{page}
				</a>
			)
		});

		console.log(navLinks)
		const my_link = <a href="/test">test</a>
		navLinks.push(my_link)
		console.log(navLinks)

		return <nav>{navLinks}</nav>;
	}
}

// Method 2
// class NavBar extends React.Component {
// 	render() {
// 		const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
// 		const navLinks = pages.map(page => {
// 			return (
// 				<a href={'/' + page}>
// 					{page}
// 				</a>
// 			)
// 		});

// 		return <nav>{navLinks}</nav>;
// 	}
// }
// export default NavBar;