import React, { Component } from 'react'
import { theme } from '../../config'
import PropTypes from 'prop-types'

export default class SideModal extends Component {

  render () {
    const { children, onClose, showModal, title, color } = this.props

    return (
      <div className={'wd-side-modal' + (showModal ? ' wd-side-modal-show' : ' wd-side-modal-hide')}>
        <div className='header'>
          <div>{title}</div>
          <div className='close' onClick={onClose}>&#x2715;</div>
        </div>
        <div className='content'>
          {children}
        </div>
        {/* <div className='footer'>
          { buttons || null }
        </div> */}

        <style jsx>{`
        .wd-side-modal {
          width: 380px;
          /* min-width: 380px;
          max-width: 430px; */
          height: 100vh;
          background: ${color};
          position: fixed;
          top:0;
          right:-500px;
          -webkit-box-shadow: 0px 0px 34px -8px rgba(0, 0, 0, 0.1);
          -moz-box-shadow: 0px 0px 34px -8px rgba(0, 0, 0, 0.15);
          box-shadow: 0px 0px 34px -8px rgba(0, 0, 0, 0.5);
        }
        
        .wd-side-modal-show {
          transition: 0.3s;
          right: 0;
          opacity: 100;
          z-index: 101;
        }
        
        .wd-side-modal-hide {
          transition: 0.3s;
          visibility: hidden;
        }
        
        .wd-side-modal .header {
          padding: 20px 30px;
          font-size: 14pt;
          font-weight: bold;
          text-transform: capitalize;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        
        .wd-side-modal .header .close {
          width: 30px;
          height: 30px;
          font-size: 30pt;
          color: ${theme.color.secondary};
          cursor: pointer;
          text-align: right;
        }
        
        .wd-side-modal .header .close:hover {
        color: var(--themeColor);
        }
        
        .wd-side-modal .content{
          padding: 20px 30px;
          overflow-y: auto;
          height: calc(100vh - 146px);
        }
        
        .wd-side-modal .content::-webkit-scrollbar {
          width: 4px;
        }
        
        .wd-side-modal .content::-webkit-scrollbar-thumb {
          background-color: var(--themeBorderColor);
        }
        
        .wd-side-modal .content .text {
          padding: 12px 15px;
          border-radius: 2px;
          border: 1px solid #eee;
          width: 100%;
          margin: 2px 0 8px 0;
        }
        
        .wd-side-modal .footer {
          padding: 20px 30px;
          border-top: 1px solid #eee;
          text-align: center;
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          background-color: white;
          z-index: 100;
        }
        
        .wd-side-modal .footer .loading {
          width: 50px;
          height: 50px;
          color: var(--themeColor);
        }
        
        @media screen and (max-width: 760px) {
          .wd-side-modal {
            width: 70%;
          }
        }
      `}
        </style>
      </div>
    )
  }
}

SideModal.propTypes = {
  title: PropTypes.string
}
