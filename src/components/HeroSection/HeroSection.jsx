import {Button, Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ilustration from '../../assets/images/illustration-intro.svg';
import './HeroSection.scss';

function HeroSection() {
  return (
    <Container className='container-hero-section'>
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <h1 className='title-section'>Bring everyone together to build better products.</h1>
          <p className='description'>Manage makes it simple for software teams to plan day-to-day tasks while keeping
            the larger team goals in view.</p>
          <Button className='btn-started show-button'>Get Started</Button>
        </Col>
        <Col xs={12} md={6}>
          <Image className='ilustration' src={ilustration}/>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
