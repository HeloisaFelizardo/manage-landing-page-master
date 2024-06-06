import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/images/logo.svg';
import './Header.scss';
import {useState} from "react";

function Header() {

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Navbar expand="lg">
      <Container className='container-header'>
        <Navbar.Brand href="#">
          <Image src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={handleToggle}
          className={isToggled ? 'navbar-toggler toggled' : 'navbar-toggler'}/>
        <Navbar.Collapse>
          <Nav className="menu">
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#product">Product</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#careers">Careers</Nav.Link>
            <Nav.Link href="#community">Community</Nav.Link>
          </Nav>
          <Button className='btn-started '>Get Started</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
