import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Filters from './components/Filters/Filters';
import ContactsBlock from './components/ContactsBlock/ContactsBlock';
import Footer from './components/Footer/Footer';
import './css/style.css';
// import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      contacts: [],
      id: [],
      sortedAsc: true,
      name: '',
      country: '',
      showActive: false,
      displayCard: false
    };
    this.selectContact = this.selectContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.filterContactList = this.filterContactList.bind(this);
    this.showCard = this.showCard.bind(this);
    this.hideCard = this.hideCard.bind(this); 
  };

async componentDidMount() {
  const url = 'https://randomuser.me/api/?results=8&inc=id,name,location,email,phone,picture&noinfo&nat=au,ca,ch,es,de,fr,gb,nl,us';
  const response = await fetch(url);
  const data = await response.json();

  //ADDING RANDOM BOOLEAN VALUE FOR USER STATUS
  data.results.forEach( (item) => {
    item.active = Math.random() >= 0.5;
  } )
  this.setState({ contacts: data.results });
}

//SORTING CONTACTS BY NAME IN ALPHABETICAL ORDER OR REVERSE
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

//SELECTED CONTACT IN THE LIST IS DISPLAYED ON CONCACT CARD 
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

//THIS FUNCTION FILTERS CONTACT LIST BY NAME AND COUNTRY AT THE SAME TIME
  filterContactList(val, type) {
   switch (type) {
    case 'name':
      this.setState({ name: val });
      break;
    case 'country':
      this.setState({ country: val });
      break;
    case 'showActive': 
      this.setState({showActive: !this.state.showActive});
      break;
    default:
      break;
    };
  };

  showCard(e) {
    e.preventDefault();
    this.setState({ displayCard: true }, () => {
    document.addEventListener('click', this.hideCard);
    });
  }

  hideCard() {
   this.setState({ displayCard: false }, () => {
   document.removeEventListener('click', this.hideCard);
    });
  }

  render() {
    const contacts = this.state.contacts;
    let filteredContacts = this.state.contacts;
    const state = this.state;
    
    ["name", "country", "showActive"]
    .forEach(filterBy => {
      let filterValue = state[filterBy];
      if ( filterBy === 'name' ) {
        filteredContacts = filteredContacts.filter(item => {
          return item.name.first.toLowerCase().includes(filterValue.toLowerCase());
        });
      } else if ( filterBy === 'country' ) {
          filteredContacts = filteredContacts.filter(item => {
            return item.location.country.includes(filterValue);
          });
        } else if (this.state.showActive) {
        filteredContacts = filteredContacts.filter(item => {
          return item.active === filterValue;
        });   
      };
    });

    return (
      <div className="app">
        <Navigation />
        <Filters 
          changeOption={this.filterContactList}
          data={contacts}
        />
        <ContactsBlock
          data={filteredContacts} 
          id={this.state.id}
          sortByName={this.sortByName}
          selectContact={this.selectContact} 
          displayCard={this.state.displayCard}
          showCard={this.showCard}
        />

        <Footer />
      </div>
    );
  }
}

export default App;