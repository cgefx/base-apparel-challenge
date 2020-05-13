import React from 'react';

import './sass/main.scss';

function App() {
	return (
		<>
			<div className='navigation'>
				<nav className='navigation__nav'></nav>
			</div>

			<header className='header'>
				<h1 className='header__text'>Header</h1>
			</header>

			<main>
				<section className='section'>
					<h2 className='row'>Main Section</h2>
					<p className='paragraph'>
						We're coming soon Hello fellow shoppers! We're currently building our new
						fashion store. Add your email below to stay up-to-date with announcements and
						our launch deals. Email Address
					</p>
				</section>
			</main>
		</>
	);
}

export default App;
