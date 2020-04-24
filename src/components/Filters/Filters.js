import React from 'react';
import { FaSearch, FaPlusCircle } from 'react-icons/fa';

// import './ContactsDesign/ContactFilter.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Filters extends React.Component {
	

changeOption(type, event) {
    const val = event.target.value;
    this.props.changeOption(val, type);
}

render() {
	const data = this.props.data;
	const uniqueCity = [...new Set(data.map(cities => cities.location.country))];

	return (
		<div className='filters'>

			<div action="#" className="filters__search">
				<input className="filters__search-input" 
					type="search"
					placeholder="Name"
					id="name"
					onChange={ this.changeOption.bind(this, 'name') } />
				<button className="filters__search-button">
					<div className="filters__search-icon">
						<FaSearch />
					</div>
				</button>
			</div>

			<div className='filters__city'>
				<select className='filters__city-dropdown'
					id="city"
					value={this.props.country}
					onChange={ this.changeOption.bind(this, 'country') } >
					<option value="">Select country</option>
					{ uniqueCity.map( (uniqueCity => (<option key={uniqueCity}> {uniqueCity} </option>)) ) }
				</select>
			</div>

			<div className="filters__active">
				<input
					className="filters__active-checkbox"
					type="checkbox"
					onChange={ this.changeOption.bind(this, 'showActive') } />
				<span className="filters__active-text">Show active</span>
			</div>

			<div className='filters__create'>
				<a className='filters__create-button' href="new-contact">
					<FaPlusCircle /> 
					<span className='filters__create-button--text'>Add new contact</span>
				</a>
			</div>

    	</div> 
		);
	}
};

export default Filters