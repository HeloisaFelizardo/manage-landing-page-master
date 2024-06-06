import {Button, Col, Container, Row} from "react-bootstrap";
import './CTASection.scss'

function CTASection() {
  return (
    <div className='container-cta-section'>
      <Container>
      <Row className="align-items-center">
        <Col xs={12} sm={10}>
          <h1 className='title-section'>Simplify how your team works today.</h1>
        </Col>
        <Col xs={12} sm={2}>
          <Button className='btn-started-light'>Get Started</Button>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default CTASection

