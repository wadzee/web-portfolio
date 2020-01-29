import React, { Component } from 'react'
import { Row, Col } from 'antd'
import ReactGA from 'react-ga'
import Emoji from 'a11y-react-emoji'
import { Layout } from '../components/'
import { Projects, Intro, About, Contact } from '../section'
import { theme } from '../config'
import { project, skill } from '../constant'
import './styles.css'

export default class App extends Component {
  
  state = {
    color: '#171c28',
    textColor: '#fff',
    darkMode: true
  }

  //google analytics
  initializeGA () {
    ReactGA.initialize('UA-156695268-1') //set your own GA key here
    ReactGA.pageview(window.location.pathname)
  }

  renderMap = (obj) => {
    return (
      obj.map((txt, idx) => {
        return (
        <li key={idx} style={{ marginTop: '10px' }}>
          {txt}
        </li>
        )
      })
    )
  }

  componentDidMount() {
    // only run google analytics in production environment
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
      this.initializeGA()
    }
  }

  render () {
    const { color, textColor, darkMode } = this.state
    const { work } = skill
    const { witty } = work
    return (
      <Layout color={color} darkMode={darkMode} textColor={textColor}>
      <section className='main-container'>
        <Intro />
      </section>

      <section className='box-container' id='about-me'> 
        <Row className='row-width'>
          <About>
            <div className='describe-me'>
              Hello! I'm Radzi, a software engineer who<span style={{ color: theme.color.secondary }}> recently just graduated from University Malaysia Sarawak</span> with a degree in Computer 
              Science. I have experience developing and (occasionally) designing 
              software for both web and mobile application.
              <br /> <br />
              I love learning new things and have a strong interest in projects that
              require both conceptual and analytical thinking to solve them. I aspire
              towards a career that will allow me to channel my ability to the fullest
              and at the same time grow them.
              <br /> <br />
              Here are a list of technologies I can do <Emoji symbol='💪'/>
              <br />
            </div>
          </About>
        </Row>
      </section>

      <section className='box-container' id='experience'> 
        <Row className='row-width'>
          <Col lg={{ span: 12, offset: 6 }} md={24} xs={24}>
            <div className='intro-text work-container'>
            <span style={{ color: theme.color.secondary}}>02.</span> Work Experience
              <div className='work-tabs'>
                <span style={{ color: '#f4f4f4'}}>Internship</span> @ Witty Data
              </div>
              <div style={{ fontWeight: 'normal', fontSize: '18px' }}>
                July 2019 - Dec 2019
              </div>
              <ul className='witty-list'>
                {this.renderMap(witty)}
              </ul>
            </div>
          </Col>
        </Row>
      </section>

      <section className='box-container' id='projects'> 
        <Row className='row-width'>
          <div className='intro-text section-container'>
            <span style={{ color: theme.color.secondary}}>03.</span> Projects I've Worked On
            <Projects project={project.lamboplace}>
              Lamboplace is an e-commerce platform that promote <span style={{ color: theme.color.secondary}}>"healthier shopping habits"</span> for   
              consumer by providing a carefully curated merchants and products on the platform.                      
            </Projects>
            <Projects project={project.ikang}>
              Ikang is an e-commerce platform that <span style={{ color: theme.color.secondary}}>sells fresh seafood products</span> online   
              and provides deliveries to most parts of Klang Valley.                      
            </Projects>
            <Projects project={project.saraponic}>
              SaraPonics is a smart hydroponic system that <span style={{ color: theme.color.secondary}}>automatically grow plants.</span> The system allow
              user to monitor the plant condition remotely and maintain PH and Nutrient level of the plant automatically.                      
            </Projects>
            </div>
        </Row>
      </section>

      <section className='contact-container' id='contact'> 
        <Row className='row-width'>
          <Col lg={{ span: 16, offset: 4 }} md={24} xs={24}>
            <Contact />
          </Col>
        </Row>
      </section>

      <style jsx>{`
        ul {
          padding: 0 0 0 25px;
          position: left;
        }
        h1 {
          margin: 0;
        }
        .contact-option {
          margin-top: 10%;
          font-weight: normal;
          font-size: 18px;
        }
        .email-button {
          font-size: 20px;
          display: inline-block;
          margin-top: 10%;
          border-radius: 5px;
          border: 2px solid ${theme.color.secondary};
          color: ${theme.color.secondary};
          padding: 2% 5%;
        }
        .email-button:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
        .contact-text {
          margin-top: 5%;
          font-weight: bold;
          font-size: 55px;
          color: #f4f4f4;
        }
        .contact-description {
          font-size: 18px;
          margin-top: 5%;
        }
        .link-svg {
          width: 22px;
        }
        .social-svg {
          width: 24px;
        }
        .social-svg:hover {
          transform: scale(1.4);
          cursor: pointer;
        }
        .center-text {
          text-align: center;
        }
        .link-svg:hover {
          cursor: pointer;
          transform: scale(1.2);
        }
        .project-link {
          margin-top: 5%;
        }
        .project-img {
          width: 85%;
        }
        .project-container {
          margin-top: 10%;
          font-size: 22px;
          text-align: right;
        }
        .project-section {
          margin-top: 40px;
        }
        .project-madeAt {
          font-weight: normal;
          font-size: 22px;
        }
        .project-tool {
          justify-content: space-between;
          text-align: right;
          width: 110%;
          margin-left: -10%;
          margin-top: 15px;
          flex-direction: row;
          display: flex;
          font-size: 15px;
        }
        .project-description {
          border-radius: 10px;
          text-align: left;
          font-size: 15px;
          font-weight: normal;
          z-index: 10;
          width: 140%;
          margin: 25px 0 0 -40%;
          padding: 20px;
          background-color: rgb(23, 42, 69);
          box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
        }
        .witty-list {
          float: left;
          margin-top: 10px;
          font-size: 17.5px;
        }
        .work-tabs {
          margin-top: 25px;
          font-size: 18pt;
          color: rgb(100, 255, 218);
        }
        .intro-text {
          color: rgb(204, 214, 246);
          font-weight: bold;
          font-size: 25px;
          padding: 7% 7%;
        }
        @media (min-width: 80em) and (max-width: 119em) {
          .project-tool {
            font-size: 12px;
          }
          .project-description {
            font-size: 13.5px;
            margin-top: 5%;
          }
          .project-container {
            margin-top: 15px;
            font-size: 22px;
            text-align: right;
          }
        }
        @media (min-width: 160em) {
          .project-tool {
            font-size: 17px;
          }
          .project-description {
            font-size: 18.5px;
          }
        }
        @media (max-width: 480px) {
          .contact-text {
            margin-top: 25px;
            font-size: 30px;
          }
          .project-link {
            display: flex;
            margin-top: 12.5px;
            justify-content: flex-end;
          }
          .contact-description {
            font-size: 15.5px;
          }
          .email-button {
            padding: 2.5% 8%;
          }
          .contact-option {
            margin-top: 25%;
            font-size: 15px;
          }
          .social-svg {
            width: 22px;
          }
          .project-madeAt {
            font-size: 17px;
          }
          .project-tool {
            width: 100%;
            margin-left: 0;
            font-size: 12.5px;
          }
          .project-container {
            text-align: left;
            font-size: 20px;
            margin: 0;
            padding: 5%;
            background-color: rgb(23, 42, 69);
            box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
          }
          .project-description {
            box-shadow: none;
            padding: 0;
            width: 100%;
            margin: 10px 0;
          }
          .project-img {
            width: 100%;
          }
          .intro-text {
            padding: 3% 5%;
            font-size: 22px;
          }
          .witty-list {
            font-size: 15px;
          }
          .work-tabs {
            font-size: 20px;
          }
          .work-container {
            margin: 0% 5%;
          }
          .section-container {
            margin: 0% 5%;
          }
        }
        `}
      </style>
    </Layout>
    )
  }
}