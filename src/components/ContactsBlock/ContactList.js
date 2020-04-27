import React  from 'react';
import { FaArrowDown, FaPencilAlt, FaTrashAlt, FaCircle } from 'react-icons/fa';

class ContactList extends React.Component {
	render () {
		const data = this.props.data;

		return (
			<table className='table'>
				<thead className='table__head'>
					<tr className='table__head-row'>
						<th className=''>&nbsp;</th>
						<th className='table__head-name'
							onClick={ () => this.props.sortByName('first') }>
							Name <FaArrowDown />
						</th>
						<th className='table__head-surname'>Surname </th>
						<th className='table__head-city'>Location </th>
						<th className='table__head-email'>Email </th>
						<th className='table__head-phone'>Phone </th>
						<th className='table__head-buttons'>&nbsp;</th>
					</tr>
				</thead>

		    	{data.map((data => {
					return (
						<tbody className='table__body'>
							<tr
							key={data}
							value={this.props.id}
							onClick={(e) => {
								this.props.selectContact(data); 
								if(window.innerWidth <= 700) {this.props.showCard(e)};
							} }
							className='table__body-row'>
								<td>{data.active ? (< FaCircle className='online' />) : < FaCircle className='offline' /> }</td> 
								<td>{data.name.first}</td>
								<td>{data.name.last}</td>
								<td>
									<span className='table__body-country'>{data.location.country}</span>
									<span className='table__body-city'> / {data.location.city}</span>
								</td>
								<td className='table__body-email'>{data.email}</td>
								<td className='table__body-phone'>{data.phone}</td>
								<td className='table__body-buttons'> 
									<button className="" onClick={() => alert('Sorry, you cannot edit this information, please try again later.')}><FaPencilAlt/></button>
									<button className=""  onClick={() => alert('Sorry, you cannot delete this contact, please try again later.')}><FaTrashAlt/></button>
								</td>
							</tr>
						</tbody>
						)
		      	    }))
				}
	    	</table>
		);
	};
}
		
export default ContactList;