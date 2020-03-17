
import React from 'react'
import { withRouter } from 'next/router'

function Footer (props) {
  return (
    <div>
      <div className='copyright'>
        <div className='container'>
            Copyright © <span style={{ textDecorationLine: 'underline', marginBottom: 2 }}>Radzi Ramli</span> (2020)
            
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
            color: ${props.textColor};
            background-color: ${props.color};
            // border-top: 1px solid #fff;
          }
          .container {
            text-align: center;
            flex-direction: row;
            font-size: 12.5pt;
            color: #fff;
          }
          @media (max-width: 480px) {
            .container {
              font-size 14px;
              text-align: center;
            }
          }
        `}
      </style>
    </div>
  )
}

export default withRouter(Footer)
