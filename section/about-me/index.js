import React from 'react'
import { Col, Row } from 'antd'
import { skill } from '../../constant'
import { theme } from '../../config'

export default function About (props) {

  const renderMap = (obj) => {
    return (
      obj.map((txt, idx) => {
        return (
          <li key={idx}>
            {txt}
          </li>
        )
      })
    )
  }
  const { skills } = skill
  const { front, back } = skills
  return (
    <div className='intro-text section-container'>
      <span style={{ color: theme.color.secondary }}>01.</span> About Me
      {props.children}
      <Row className='stack-text'>
        <Col lg={9} xs={14}>
          <ul className='stack-text'>
            {renderMap(front)}
          </ul>
        </Col>
        <Col lg={9} xs={10}>
          <ul className='stack-text'>
            {renderMap(back)}
          </ul>
        </Col>
      </Row>
      <style jsx>
        {`
          ul {
            padding: 0 0 0 25px;
          }
          .stack-text {
            margin-top: 30px;
            font-size: 18px;
          }
          .intro-text {
            color: rgb(204, 214, 246);
            font-weight: bold;
            font-size: 25px;
            padding: 7% 7%;
          }
          @media (max-width: 65em) {
            .intro-text {
              padding: 3% 5%;
              font-size: 22px;
            }
            .stack-text {
              font-size: 15px;
            }
            .section-container {
              margin: 0% 5%;
            }
          }
        `}
      </style>
    </div>
  )
}