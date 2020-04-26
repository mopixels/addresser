import React from 'react';
import User from './User';


const Navigation = () => {
	return (
		<div className='navigation'>
			<div className="navigation__logo">aDDRESSER</div>
			<ul className='navigation-buttons'>
				<li className='navigation__item navigation__item-1'><a href="contacts" onClick={ (event) => event.preventDefault() } className="navigation__link">News feed</a></li>
				<li className='navigation__item navigation__item--active'><a href="contacts" onClick={ (event) => event.preventDefault() } className="navigation__link">Contacts</a></li>
				<li className='navigation__item navigation__item-3'><a href="contacts" onClick={ (event) => event.preventDefault() } className="navigation__link">Favourites</a></li>
			</ul>
			<User />
		</div>
	);
};

export default Navigation;