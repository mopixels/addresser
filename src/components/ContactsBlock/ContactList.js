import React  from 'react';
import { FaArrowDown, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

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
							Name <FaArrowDown style= {{}} />
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
							onClick={(e) => this.props.selectContact(data)}
							className='table__body-row'>
								<td>
									{/* {data.active ? (<a/>) : (<a/>)} */}
								</td> 
								<td>{data.name.first}</td>
								<td>{data.name.last}</td>
								<td>{data.location.country} / {data.location.city}</td>
								<td>{data.email}</td>
								<td className='table__body-phone'>{data.phone}</td>
								<td className='table__body-buttons'> 
									<button className="" onClick={() => alert('Sorry, you cannot edit this information, please try again later.')}><FaPencilAlt/></button>
									<button className=""  onClick={() => alert('Sorry, you cannot delete this contact, please try again later.')}><FaTrashAlt/></button>
									{/* < className='table__body-buttons--pencil' /> */}
									{/* <FaTrashAlt className='table__body-buttons--bin'/> */}
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