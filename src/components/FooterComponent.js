import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
    <React.Fragment>
        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
      <Navbar dark>
        <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;