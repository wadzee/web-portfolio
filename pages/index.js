import React from 'react'
import stylesheet from 'antd/dist/antd.min.css'

import { Layout, Menu, Breadcrumb, Row, Col } from 'antd'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

export default class App extends React.Component {
  render () {
    return <Layout>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <style jsx>{`
        #components-layout-demo-top-side-2 .logo {
          width: 120px;
          height: 31px;
          background: #333;
          border-radius: 6px;
          margin: 16px 28px 16px 0;
          float: left;
        }
      `}</style>

      <Header className='header'>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key='1'>nav 1</Menu.Item>
          <Menu.Item key='2'>nav 2</Menu.Item>
          <Menu.Item key='3'>nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ background: '#fff', padding: 24, margin: 0 }}>
            <Row gutter={12}>
              <Col md={12} xs={12}>
                <div>
                  Hi
                </div>
              </Col>
              <Col md={12} xs={12}>
                <div>
                  Test
                </div>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  }
}
