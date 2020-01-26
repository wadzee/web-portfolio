import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { withRouter } from 'next/router'
import { SideModal } from '../index'
import { theme } from '../../config'
import { Col, Icon, Row } from 'antd'
import Link from 'next/link'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSignedIn: false,
      showMenu: false
    }
  }

  componentDidMount () {
  }

  handleClick = () => {
    const { showMenu } = this.state
    this.setState({ showMenu: false })
  }

  render () {
    const { color, darkMode, textColor } = this.props
    const { showMenu } = this.state
    return (
      <div className='header'>
        <div className='container'>
          <Row>
            <Col xs={12} lg={2}>
              <Link href='/'>
                <div>
                  <img src='/img/avatar.png' alt='/img/avatar.png' className='avatar'/>
                </div>
              </Link>
            </Col>

            <Col xs={12} lg={22}>
              <div className='menu'>
                <AnchorLink href='/about-me'>
                  <div className='desktopMenu'>About</div> 
                </AnchorLink>

                <AnchorLink href='/experience'>
                  <div className='desktopMenu'>Experience</div>
                </AnchorLink>

                <AnchorLink href='/projects'>
                  <div className='desktopMenu'>Works</div>
                </AnchorLink>

                <AnchorLink href='/projects'>
                  <div className='desktopMenu'>Contact</div>
                </AnchorLink>
              </div>

              <div className='hamburgerIcon' onClick={() => this.setState({ showMenu: true })}>☰</div>
            </Col>
          </Row>

          <SideModal
            showModal={showMenu}
            onClose={this.handleClick}
            color={color}
            darkMode={darkMode}
            >
              <div className='mobileMenu'>
              <AnchorLink href='/about-me'>
                <div className='mobileMenuLink' onClick={() => this.handleClick()}>About</div>
              </AnchorLink>

              <AnchorLink href='/experience'>
                <div className='mobileMenuLink' onClick={() => this.handleClick()}>Experience</div>
              </AnchorLink>

              <AnchorLink href='/projects'>
                <div className='mobileMenuLink' onClick={() => this.handleClick()}>Works</div>
              </AnchorLink>

              <AnchorLink href='/projects'>
                <div className='mobileMenuLink' onClick={() => this.handleClick()}>Contact</div>
              </AnchorLink>
            </div>
          </SideModal>
        </div>

        <style jsx>{`
          .hamburgerIcon {
            color: ${theme.color.primary};
            margin-top: 7%;
            font-size: 30pt;
            cursor: pointer;
            display: none;
            float: right;
          }
          .avatar {
            width: 78px;
            z-index: 10;
          }
          .avatar:hover {
            cursor: pointer; 
          }
          .desktopMenu {
            letter-spacing: 0.5pt;
            margin-right: 25px;
            font-size: 12.5pt;
            color: ${theme.color.primary};
            font-weight: bold;
          }
          .loginMenu {
            border: 1px solid #fff;
            border-radius: 5px;
            font-size: 9pt;
            padding: 1px 10px;
          }
          .languageButton {
            background-color: ${theme.color.primary};
            color: white;
            width: 40px;
            height: 20px;
            border-radius: 5px;
            font-size: 9.5pt;
            text-align: center;
            margin-top: 1px;
          }
          .mobileLanguageButton {
            margin-left: 10px;
          }
          .menu {
            display: flex;
            flex-direction: row;
            float: right;
            margin-top: 25px;
          }
          .rightSide {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            color: #222;
            cursor: pointer;
            white-space: nowrap;
          }
          .mobileMenuContainer {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 100;
            top: 0px;
            left: 0px;
            background-color: rgba(0,0,0,0.7);
          }
          .mobileMenu {
            width: 88%;
            min-height: 300px;
            position: absolute;
            z-index: 101;
            top: 37%;
            left: 6%;
            border-radius: 10px;
            padding: 15px;
          }
          .mobileMenuLink {
            font-size: 15pt;
            text-align: center;
            font-weight: bold;
            padding: 10px 15px;
            cursor: pointer;
            margin: 5px 0;
            color: ${textColor}
          }
          .mobileMenuLink:hover {
            background-color: #f4f4f4;
            color: ${theme.color.secondary};
          }
          .mobileMenuLink a {
            color: ${theme.color.secondary}
          }
          .hamburgerIcon:hover {
            color: ${theme.color.primary};
          }
          .header {
            background-color: ${this.props.color};
            height: 100px;
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
          }
          .logo {
            color: white;
            font-size: 24pt;
            font-weight: bold;
            margin-left: 10px;
            letter-spacing: 2pt;
            cursor: pointer;
            white-space: nowrap;
           }
          .logo:hover {
            opacity: 0.6;
          }
          a {
            text-decoration: none;
            color: white;
            font-size: 11pt;
          }
          a:hover {
            opacity: 0.6;
          }
          button {
            color: white;
            background-color: ${theme.color.primary};
            border: 0px solid transparent;
            font-size: 11.5pt;
            letter-spacing: 0.5pt;
            padding: 10px 18px;
            cursor: pointer;
          }
          button:hover {
            opacity: 0.8;
          }
          @media (max-width: 720px) {
            .menu {
              display: none;
            }
            .hamburgerIcon {
              display: block;
            }
          }
        `}</style>
      </div>
    )
  }

  // getMyAccountLink = () => {
  //   const { type = '' } = authService.getCurrentUser() || {}
  //   return `/${type.replace(' ', '')}`
  // }
}

export default withRouter(Header)
