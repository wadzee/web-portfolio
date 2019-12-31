import React, { Component } from 'react'

import { Layout } from '../components/'
import { Menu, Row, Col } from 'antd'
import './styles.css'

const { SubMenu } = Menu

export default class App extends React.Component {
  render () {
    return <Layout title='Home'>
      <section className='main'>
        <Row>
          <div className='name'>Hi</div>
          <div> test</div>
        </Row>
      </section>
    </Layout>
  }
}
