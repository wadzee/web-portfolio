import React, { Component } from 'react'
import { Col, Row } from 'antd'
import './styles.css'

export default class Project extends Component {

    render() {
        const { project, children } = this.props
        return (
          <div className='project-section'>
            <Row style={{ width: '100%' }}>
              <Col lg={16} md={14} sm={24} xs={24}>
                <img src={project.img} className='project-img' alt={project.img} />
              </Col>
              <Col lg={8} md={10} sm={24} xs={24}>
                <div className='project-container'>
                  {project.name}
                  <div className='project-madeAt'>
                    {project.personal ? '' : 'Made At '}
                    <span className='company'>{project.personal ? 'Final Year Project' : 'Witty Data'}</span>
                  </div>
                  <div className='project-description'>
                    {children}
                  </div>
                  <div className='project-tool'>
                    {project.tools.map((txt, idx) => {
                    return (
                      <div key={idx}>
                        {txt}
                      </div>
                    )})}
                  </div>
                  <div className='project-link'>
                    <img src={project.github ? 'img/github.svg' : '/img/link.svg'} className='link-svg' alt={project.github ? '/img/github.svg' : '/img/link.svg'} onClick={() => window.open(project.link, '_blank')} />
                  </div>
                </div>
              </Col>
            </Row>
            <style jsx>
              {`
                        .company {
                            font-weight: bold;
                        }
                    `}
            </style>
          </div>
        )
    }
}