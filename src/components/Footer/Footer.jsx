import './Footer.scss';
import {Col, Container, Nav, Row} from "react-bootstrap";
import NewsletterForm from "./NewsletterForm";
import Image from "react-bootstrap/Image";
import logo from "../../assets/images/logo.svg";

function Footer() {
  return (
    <footer className='container-footer-section'>
      <Container>
        <Row className="footer-row">
          <Col xs={12} sm={3} className="footer-col">
            <Image src={logo} className="footer-logo"/>
          </Col>

          <Col xs={12} sm={3} className="footer-col">
            <Nav className="flex-column">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Pricing</Nav.Link>
              <Nav.Link href="#pricing">Products</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} sm={3} className="footer-col">
            <Nav className="flex-column">
              <Nav.Link href="#careers">Careers</Nav.Link>
              <Nav.Link href="#community">Community</Nav.Link>
              <Nav.Link href="#privacy">Privacy Policy</Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} sm={3} className="footer-col">
            <NewsletterForm/>
            <p className='copy'>&copy; 2024 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
