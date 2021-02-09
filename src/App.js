import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { Navbar, NavDropdown, Form, Button, FormControl, Nav, } from 'react-bootstrap';

//Pages
import HomePage from './pages/LandingPage';
import AutoIns from './pages/AutoIns';
import HomeIns from './pages/HomeIns';
import LifeIns from './pages/LifeIns';
import CommercialInsurance from './pages/CommercialInsurance';
import PetInsurance from './pages/PetInsurance';
import Companies from './pages/Companies';
//Components
import Footer from './components/Footer';
import TopAlert from './components/TopAlert';

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    title: 'Julio Garcia Insurance',
    headerLinks: [
      { title: 'Home', path: '/landingpage' },
      { title: 'Auto', path: '/autoins' },
      { title: 'Home', path: '/homeins' },
      { title: 'Life', path: '/lifeins' },
      { title: 'CommercialInsurance', path: '/' },
      { title: 'PetInsurance', path: '/' },
      { title: 'CompaniesWeRepresent', path: '/' },

    ],

    home: {
      title: 'Julio Garcia Insurance',
      subTitle: 'Over 20 years of experience',
      text: 'Lorem ipsum dolor sit amet'
    },

    auto: {
      title: 'Auto Insurance',
    },

    homeIns: {
      title: 'Home Insurance',
    },

    life: {
      title: 'Life Insurance',
    },

    commercial: {
      title: 'Commercial Insurance',
    },

    pet: {
      title: 'Pet Insurance',
    },

    companies: {
      title: 'Companies We Represent',
    },

  }
}

render () {


  return (

  <Router>
    <Container className='p-0' fluid={true}>
    < TopAlert />

  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/landingpage"></Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="./pages/LandingPage">Home</Nav.Link>

      <NavDropdown title="Personal Insurance" id="basic-nav-dropdown">
        <NavDropdown.Item href="./pages/AutoIns">Auto Insurance</NavDropdown.Item>
        <NavDropdown.Item href='./pages/HomeIns'>Home Insurance</NavDropdown.Item>
        <NavDropdown.Item href="./pages/LifeIns">Life Insurance</NavDropdown.Item>
      </NavDropdown>

      <Nav.Link href="./pages/CommercialInsurance">Commercial Insurance</Nav.Link>
      <Nav.Link href="./pages/PetInsurance">Pet Insurance</Nav.Link>
      <Nav.Link href="./pages/Companies">Companies We Represent</Nav.Link>
    </Nav>

    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

<Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
<Route path='/auto' render={() => <AutoIns title={this.state.auto.title}  /> }/>
<Route path='/homeIns' render={() => <HomeIns title={this.state.homeIns.title} /> } />
<Route path='/life' render={() => <LifeIns title={this.state.life.title} /> } />
<Route path='/commercial' render={() => <CommercialInsurance title={this.state.commercial.title} /> } />
<Route path='/pet' render={() => <PetInsurance title={this.state.pet.title}  /> } />
<Route path='/companies' render={() => <Companies title={this.state.companies.title}  /> } />


<Footer />

    </Container>
    </Router>

  );
}


}

export default App;
