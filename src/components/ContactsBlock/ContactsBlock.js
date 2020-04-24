import React from 'react';
import ContactCard from './ContactCard';
import ContactList from './ContactList';



class ContactsBlock extends React.Component {
	



render() {



	return (
        <div style= {{ display: 'flex', flex: '1 0', padding:'1rem 3rem 2rem 3rem', height: 'min-content' }} 
        // <div style= {{ display: 'grid', gridTemplateColumns: 'repeat(7, min-content)', padding:'2rem 3rem', height: 'min-content' }} 
              className='contact-block'> 

          <ContactCard 
            data={this.props.data} 
            value={this.props.id}
            />

          <ContactList 
            data={this.props.data} 
            sortByName={this.props.sortByName}  
            value={this.props.id} 
            selectContact={this.props.selectContact}
            />

        </div>

		);
	}
};

export default ContactsBlock