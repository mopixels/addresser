import React from 'react';
import { FaBookmark, FaComments, FaUsers, FaRegCommentDots, FaWrench, FaPowerOff } from 'react-icons/fa';

class User extends React.Component {
constructor(){
 super();
 this.state = {
       displayMenu: false,
     };
this.showDropdownMenu = this.showDropdownMenu.bind(this);
this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

hideDropdownMenu() {
   this.setState({ displayMenu: false }, () => {
   document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="user-nav">
          <div className="user-nav__icon-box">
            <FaBookmark className="user-nav__icon" />
            <span className="user-nav__notification">7</span>
          </div>

          <div className="user-nav__icon-box">
            <FaComments className="user-nav__icon" />
            <span className="user-nav__notification">13</span>
          </div>

         <div className="user-nav__user" tabIndex="1" onClick={this.showDropdownMenu}>
            <span className="user-nav__user-name">Modestas Rimkus</span>
         </div> 

          { this.state.displayMenu ? 
          	(
          <ul className='user-nav__menu'>
	         <li className='user-nav__options'> 
           <FaUsers className='user-nav__options-icon'/><a className='user-nav__link' href="Groups" onClick={ (event) => event.preventDefault() }>Groups</a></li>

	         <li className='user-nav__options'>
           <FaRegCommentDots className='user-nav__options-icon' /><a className='user-nav__link' href="Frequently contacted" onClick={ (event) => event.preventDefault() }>Frequently contacted</a></li>

	         <li className='user-nav__options'> 
           <FaWrench className='user-nav__options-icon'/><a className='user-nav__link' href="Preferences" onClick={ (event) => event.preventDefault() }>Preferences</a></li>

	         <li className='user-nav__options'> 

           <FaPowerOff className='user-nav__options-icon'/><a className='user-nav__link' href="Log Out" onClick={ (event) => event.preventDefault() }>Log Out</a></li>
          </ul>
        ) : ( null )
        }
       </div>
    );
  }
}

export default User;