import {Col, Container, Row} from "react-bootstrap";
import './FeatureSection.scss'

function FeaturesSection() {
  return (

    <Container className='container-features-section'>
      <Row>
        <Col xs={12} md={6}>
          <h2 className='sub-title'>What’s different about Manage?</h2>
          <p className='intro'> Manage provides all the functionality your team needs, without
            the complexity. Our software is tailor-made for modern digital
            product teams.</p>
        </Col>

        <Col xs={12} md={6} className='right'>

          <Row>
            <Col>
              <Row>
                <div className='number'>01</div>
                <h3 className='sub-title-features'>Track company-wide progress</h3>
              </Row>
              <Row>
                <p className='description'>See how your day-to-day tasks fit into the wider vision. Go from tracking
                  progress at the milestone level all the way done to the smallest of details. Never lose sight of the
                  bigger picture again.</p>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col>
              <Row>
                <div className='number'>02</div>
                <h3 className='sub-title-features'>Advanced built-in reports</h3>
              </Row>
              <Row>
                <p className='description'>Set internal delivery estimates and track progress toward company goals.
                  Our customisable dashboard helps you build out the reports you need to keep key stakeholders
                  informed.</p>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col>
              <Row>
                <div className='number'>03</div>
                <h3 className='sub-title-features'>Everything you need in one place</h3>
              </Row>
              <Row>
                <p className='description'>Stop jumping from one service to another to communicate, store files, track
                  tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
              </Row>
            </Col>
          </Row>

        </Col>
      </Row>
    </Container>

  )
}

export default FeaturesSection;