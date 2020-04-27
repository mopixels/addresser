import React from 'react';

class ContactCard extends React.Component {
	render() {
		const { value, displayCard } = this.props;

		return (
			<div>
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


			{ displayCard ? 
          	( <div className='popupCard' >
	        	<img 
				style={{height: '18rem', width: '18rem', display: 'block', margin: '1rem', border: 'outset 3px rgba(0,0,0,0.1)',  borderRadius: '50%', alignSelf: 'center'}} 
				src={`https://robohash.org/${value.name}.png?set=set3`}
				alt='' />

				<div className='popupCard__info'>
					<ul className='popupCard__info--titles'>
						<li> Name:</li>
						<li> Surname:</li>
						<li> Location:</li>
						<li> Email:</li>
						<li> Phone:</li>
					</ul>
					<ul className='popupCard__info--selected'>
						<li> {value.name} </li>
						<li> {value.surname} </li>
						<li> {value.location} </li>
						<li> <a href='mailto: #'>{value.email}</a> </li>
						<li> <a href="tel: #" className="">{value.phone}</a>  </li>
					</ul>
				</div>
			</div>

        ) : ( null )
        }



		</div>
		);
	}
}

export default ContactCard;


