import React, { Component } from 'react'
import { Col, Row } from 'antd'
import { theme } from '../../config'
import './styles.css'

export default class Contact extends Component {

  render() {
    return (
      <div className='intro-text work-container center-text'>
        <span style={{ color: theme.color.secondary}}>04.</span> Contact Info
        <div className='contact-text'>
          Get In Touch
        </div>
        <div className='contact-description'>
          Currently looking for a job or any freelance opportunities, 
          whichever is available. My inbox is always open for everyone,
          recruiters or strangers wanting to say hi.
        </div>
        <div className='email-button' onClick={() => window.open('mailto:radzi@radziramli.com')}>
          Email Me
        </div>
        <div className='contact-option'>
          I'm also available on these platform
          <Row style={{ marginTop: '25px' }}>
            <Col lg={{ span: 2, offset: 9 }} md={{ span: 2, offset: 9 }} xs={{ span: 2, offset: 8 }}>
              <div className='social-link'>
                <img src='/img/github.svg' className='social-svg' alt='/img/github.svg' onClick={() => window.open('https://github.com/wadzee', '_blank')} />
              </div>
            </Col>
            <Col lg={2} md={{ span: 2, offset: 0 }} xs={{ span: 2, offset: 1 }}>
              <div className='social-link'>
                <img src='/img/linkedin.svg' className='social-svg' alt='/img/linkedin.svg' onClick={() => window.open('https://www.linkedin.com/in/radziramli/', '_blank')} />
              </div>
            </Col>
            <Col lg={2} md={{ span: 2, offset: 0 }} xs={{ span: 2, offset: 1 }}>
              <div className='social-link' style={{ marginTop: '4px'}}>
                <img src='/img/youtube.svg' className='social-svg' alt='/img/youtube.svg' onClick={() => window.open('https://www.youtube.com/channel/UCvVfXGH0X_kzbo9jcoNbQSw', '_blank')} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}