import React from 'react';
import ContactCard from './ContactCard';
import ContactList from './ContactList';

class ContactsBlock extends React.Component {
  render() {
	  return (
      <div style= {{ display: 'grid', gridTemplateColumns: 'min-content 1fr', flex: '1 0', padding:'2rem 3rem', height: 'min-content' }} 
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

export default ContactsBlock;