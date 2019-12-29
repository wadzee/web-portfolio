
import React, { Component } from 'react'
import { withRouter } from 'next/router'
import { theme } from '../config'
import Link from 'next/link'

class Footer extends Component {
  render () {
    return (
      <div className='footer'>
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
          .footer {
            background-color: #fff;
            flex: 1;
            color: white;
            padding: 20px 0 0 0;
            // border-top: 1px solid #f4f4f4;
          }
          .footer .column {
            padding: 40px 25px;
            align-items: flex-start;
          }
          .footer .column .title {
            font-weight: bold;
            color: #222;
            font-size: 18pt;
            padding: 10px 0;
          }
          .footer .column .contact {
            justify-content: center;
            color: #222;
            font-size: 10pt;
            padding: 5px 0;
            margin-left: 24%;
            text-align: left;
          }
          .footer .column .contact a {
            font-size: 10pt;
          }
          a {
            text-decoration: none;
            color: #222;
            font-size: 11.5pt;
          }
          a:hover {
            opacity: 0.6;
          }
          .brand {
            margin-top: -10px;
            align-items: center;
            color: #222;
            font-weight: bold;
            font-size: 18pt;

          }
          .logo {
            width: 70px;
            height: 70px;
            margin-right: 20px;
          }
          .copyright {
            display: flex;
            flex: 1;
            padding: 20px;
            font-size: 9.5pt;
            color: #222;
            background-color: ${theme.color.primary};
          }
          .container {
            font-size: 12.5pt;
          }
          .brandDescription {
            color: #222;
            padding: 10px 0 10px 0;
            font-size: 10pt;
            word-wrap: break-word;
          }
          button {
            color: white;
            background-color: ${theme.color.primary};
            border: 0px solid transparent;
            font-size: 8.5pt;
            letter-spacing: 0.8pt;
            padding: 6px 18px;
            cursor: pointer;
            margin-top: 5px;
            margin-right: 8px;
          }
          button:hover {
            opacity: 0.8;
          }

          .contactBox {
            margin-left: 15%;
            margin-top: 8%;
          }
          .pncLink {
            color: white;
            font-size: 9pt;
            padding-left: 5px;
            text-decoration: underline;
          }
          .pncLink:hover {
            color: #fff;
          }
          .store-icon {
            width: 115px;
            height: auto;
            margin-right: 10px;
          }
        `}</style>
      </div>
    )
  }
}

export default withRouter(Footer)
