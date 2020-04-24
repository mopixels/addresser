import React from 'react';
// import './SearchField.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SearchField = () => {
	return (
		<form action="#" className="search">
			<input type="text" className="search__input" placeholder="Search" />
			<button className="search__button">
				<svg className="search__icon">
					{/* <use xlink:href="img/sprite.svg#icon-magnifying-glass"></use> */}
				</svg>
			</button>
		</form>
	);
};

export default SearchField

