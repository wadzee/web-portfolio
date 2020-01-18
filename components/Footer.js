
import React, { Component } from 'react'
import { withRouter } from 'next/router'
import { theme } from '../config'
import Link from 'next/link'

class Footer extends Component {
  render () {
    return (
      <div>
        <div className='copyright'>
          <div className='container' style={{ textAlign: 'center', color: '#fff' }}>
            © 2020 <span style={{ textDecorationLine: 'underline', marginBottom: 2 }}>Radzi Ramli</span>. All Rights Reserved.
          </div>
        </div>

        <style jsx>{`
          .underline {
            border-bottom-width: 2;
            border-color: #000;
          }
          .copyright {
            display: flex;
            flex: 1;
            padding: 20px;
            font-size: 9.5pt;
            color: #222;
            background-color: ${this.props.color};
            // border-top: 1px solid #fff;
          }
          .container {
            font-size: 12.5pt;
          }
        `}</style>
      </div>
    )
  }
}

export default withRouter(Footer)
