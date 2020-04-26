import React from 'react';

class ContactCard extends React.Component {
	render() {
		const { value } = this.props;

		return (
			<div className='card' >
	        	<img 
				style={{height: '18rem', width: '18rem', display: 'block', margin: '1rem', border: 'outset 3px rgba(0,0,0,0.1)',  borderRadius: '50%', alignSelf: 'center'}} 
				src={`https://robohash.org/${value.name}.png?set=set3`}
				alt='' />

				<div className='card__info'>
					<ul className='card__info--titles'>
						<li> Name:</li>
						<li> Surname:</li>
						<li> Location:</li>
						<li> Email:</li>
						<li> Phone:</li>
					</ul>
					<ul className='card__info--selected'>
						<li> {value.name} </li>
						<li> {value.surname} </li>
						<li> {value.location} </li>
						<li> <a href='mailto: #'>{value.email}</a> </li>
						<li> {value.phone} </li>
					</ul>
				</div>
			</div>
		);
	}
}

export default ContactCard;