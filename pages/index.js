import React, { Component } from 'react'

import Layout from '../components/Layout'
import { Menu, Row, Col } from 'antd'
import './styles.css'

const { SubMenu } = Menu

export default class App extends React.Component {
  render () {
    return <Layout title='Home'>
      <section>
        <div className='name'>Hi</div>
      </section>
    </Layout>
  }
}
