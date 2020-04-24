import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Filters from './components/Filters/Filters';
import ContactsBlock from './components/ContactsBlock/ContactsBlock';
import Footer from './components/Footer/Footer';
import './App.scss';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      contacts: [],
      id: [],
      sortedAsc: true,
      name: '',
      country: '',
      showActive: false
    };
    this.selectContact = this.selectContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.filterContactList = this.filterContactList.bind(this);
  };


async componentDidMount() {
  const url = 'https://randomuser.me/api/?results=8&inc=id,name,location,email,phone,picture&noinfo&nat=au,ca,ch,es,de,fr,gb,nl,us';
  const response = await fetch(url);
  const data = await response.json();
  this.setState({ contacts: data.results })
  // console.log('state', this.state.contacts);
}

  sortByName(key) {
    const contacts = this.state.contacts;
    let sortedData = contacts.name;
    if (this.state.sortedAsc) {
      sortedData = contacts.sort( (a, b) => a.name[key].localeCompare(b.name[key]))
    } else {
      sortedData = contacts.sort( (a, b) => b.name[key].localeCompare(a.name[key]))
    }
    this.setState({
      sortedAsc: !this.state.sortedAsc,
      contacts: sortedData
    });
  };

  selectContact(id){
    this.setState({ id : {
      name: id.name.first,
      surname: id.name.last,
      location: id.location.country,
      email: id.email,
      phone: id.phone,
      picture: id.picture.large
    } });
  };

  filterContactList(val, type) {
   switch (type) {
    case 'name':
      this.setState({ name: val });
      break;
    case 'country':
      this.setState({ country: val });
      break;
    // case 'showActive': 
    //   this.setState({showActive: !this.state.showActive});
    //   break;
    default:
      break;
    };
  };

  render() {
    const contacts = this.state.contacts;
    let filteredContacts = this.state.contacts;
    const state = this.state;

    [
    "name", 
    "country"

    // , "showActive"

    ]
    .forEach(filterBy => {
      let filterValue = state[filterBy];
      // console.log('filterValue', filterBy)
      if ( filterBy === 'name' ) {
      // if ( typeof filterValue != 'boolean' ) {
        filteredContacts = filteredContacts.filter(item => {
          // return console.log('foreach item', item.name.first)
          return item.name.first.toLowerCase().includes(filterValue.toLowerCase());
        });
      } else if ( filterBy === 'country' ) {
        // console.log('filterValue', filterBy)
          filteredContacts = filteredContacts.filter(item => {
            // return console.log('else if', item.location.country)
            return item.location.country.includes(filterValue);
          });
        } 
        // console.log ('filteredContacts', filteredContacts)

      // else if (this.state.showActive) {
      //   filteredContacts = filteredContacts.filter(item => {
      //     return item.active === filterValue;
      //   });   
      // };

    });

    return (
      <div className="app">
      
        <Navigation />
        <Filters 
          changeOption={this.filterContactList}
          data={contacts}
          // filterActive={this.filterActive} 
        />
        <ContactsBlock
          data={filteredContacts} 
          // filteredContacts={filteredContacts}
          id={this.state.id}
          sortByName={this.sortByName}
          selectContact={this.selectContact} 
        />

        <Footer />

      </div>
    );
  }
}

export default App;