import React, { Component } from 'react'
import { Head, Header, Footer } from './index'

const layoutStyle = {
  backgroundColor: '#fff',
  margin: 'auto',
  marginTop: 0,
  marginBottom: 0,
  maxHeight: '100vh'
}

class Layout extends Component {
  async componentDidMount () {

  }

  render () {
    const { children } = this.props
    let { showFooter, showHeader } = this.props
    showFooter = typeof showFooter === 'boolean' ? showFooter : true
    showHeader = typeof showHeader === 'boolean' ? showHeader : true

    return (
      <div style={layoutStyle}>
        <Head />

        {showHeader ? <Header /> : null}

        {children}

        {showFooter ? <Footer /> : null}

        <style jsx global>{`
          body {
            font-family: 'Quicksand', sans-serif;
            margin: 0;
            overflow-x: hidden;
          }

          a {
            font-family: 'Quicksand', sans-serif;
          }

          .container {
            z-index: 10;
            margin: 0 auto;
            width: 100%;
            padding: 0 20px;
          }

          .content {
            display: flex;
            justiy-content: center;
          }

          @media (min-width: 1180px) {
            .container {
              width: 1180px;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Layout
