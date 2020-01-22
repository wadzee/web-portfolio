import { Layout } from '../components/'
import { Row, Col } from 'antd'
import ReactGA, { initialize } from 'react-ga'
import { text, theme } from '../config'
import Emoji from 'a11y-react-emoji'
import './styles.css'

export default class App extends React.Component {
  
  state = {
    color: '#171c28',
    textColor: '#fff',
    lineColor: '#45B29A',
    darkMode: true
  }

  initializeGA () {
    ReactGA.initialize('UA-156695268-1')
    ReactGA.pageview('/')
  }

  componentDidMount() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      console.log('env', process.env.NODE_ENV )
    } else this.initializeGA()
  }

  render () {
    const { color, textColor, lineColor, darkMode } = this.state
    const { front, back, witty } = text
    return (
      <Layout color={color} darkMode={darkMode} textColor={textColor}>
      <div className='long-line' style={{ backgroundColor: lineColor, opacity: textColor === '#6B5858' ? 0.4 : 0.7}} />
      <section className='main-container'>
        <Row className='body-width'>
          <Col lg={12} xs={24}>
            <div className='text-box'>
                <div className='hello-text deselect' style={{ color: textColor }}>Hello, I'm</div>
                <div className='name-text deselect'><span style={{ color: textColor, marginRight: 7 }}>{'{'}</span>Radzi Ramli<span style={{ color: textColor, marginLeft: 8}}>{'}'}</span></div>
                <div className='position-text deselect' style={{ color: textColor }}>Full Stack Developer</div>
                <div className='me-text deselect'>
                  I design and code for 
                  <br/>
                  <span className='flex-row'>
                    Website
                      <img src='/static/img/tick.svg' className='tick' />
                   </span>
                  <br/>
                  <span className='flex-row'>
                    Mobile
                      <img src='/static/img/tick.svg' className='tick' />
                   </span>
                </div>
                <Col lg={8} xs={14}>
                {/* <a href='/static/file/resume.pdf' target='_blank'> */}
                  <div className='resume-btn'>
                      <span className='deselect' style={{ color: '#fff'}}>Grab My Resume</span>
                  </div>
                {/* </a> */}
                </Col>
            </div>
          </Col>
          <Col lg={12} xs={0}>
            <div>
              <img src='/static/img/laptop.svg' className='main-image' />
            </div>
          </Col>
        </Row>
      </section>

      <section className='box-container' id='about-me'> 
        <Row style={{ flex: 1 }}>
          <Col lg={24} xs={24}>
            <div className='intro-text border-section'>
              <span style={{ color: theme.color.secondary}}>01.</span> About Me
              <div className='describe-me'>
              Hello! I'm Radzi, a software engineer who<span style={{ color: theme.color.secondary }}> recently just graduated from University Malaysia Sarawak</span> where I majored in Computer 
              Science. I have experience developing and (occasionally) designing 
              software for both web and mobile application.
              <br /> <br />
              I love learning new things and have a strong interest in projects that
              require both conceptual and analytical thinking to solve them. I aspire
              towards a career that will allow me to channel my ability to the fullest
              and at the same time grow them.
              <br /> <br />
              Here are a list of technologies I can do:
              <br /> <br />
              <Row>
                <Col lg={6} xs={14}>
                  <div className='list-wrapper'>
                    <Emoji symbol='💪' /> I can:
                    <div style={{ marginTop: '15px'}}>
                    {front.map((txt, idx) => {
                      return (
                      <li key={idx} className='list-array'>
                        {txt}
                      </li>
                      )
                    })}
                    </div>
                  </div>
                </Col>
                <Col lg={8} xs={10}>
                  <div className='list-wrapper'>
                    <br />
                    <div style={{ marginTop: '15px'}}>
                    {back.map((txt, idx) => {
                      return (
                      <li key={idx} className='list-array'>
                        {txt}
                      </li>
                      )
                    })}
                    </div>
                  </div>
                </Col>
              </Row>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section className='box-container' id='experience'> 
        <Row style={{ flex: 1 }}>
          <Col lg={{ span: 12, offset: 6 }} xs={24}>
            <div className='intro-text work-container'>
            <span style={{ color: theme.color.secondary}}>02.</span> Work Experience
              <div className='work-tabs'>
                <span style={{ color: '#f4f4f4'}}>Internship</span> @ Witty Data
              </div>
              <div style={{ fontWeight: 'normal', fontSize: '18px' }}>
                July 2019 - Dec 2019
              </div>
              <div className='witty-description'>
                {witty.map((txt, idx) => {
                  return (
                    <ul>
                    <li key={idx} className='witty-list'>
                      {txt}
                    </li>
                    </ul>
                  )
                })}
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* <section className='box-container' id='experience'> 
        <Row style={{ flex: 1 }}>
          <Col lg={{ span: 12, offset: 6 }} xs={24}>
            <div className='intro-text work-container'>
            <span style={{ color: theme.color.secondary}}>02.</span> Work Experience
              <div className='work-tabs'>
                <span style={{ color: '#f4f4f4'}}>Internship</span> @ Witty Data
              </div>
              <div style={{ fontWeight: 'normal', fontSize: '18px' }}>
                July 2019 - Dec 2019
              </div>
              <div className='witty-description'>
                {witty.map((txt, idx) => {
                  return (
                    <ul>
                    <li key={idx} className='witty-list'>
                      {txt}
                    </li>
                    </ul>
                  )
                })}
              </div>
            </div>
          </Col>
          <Col lg={10}>
            
          </Col>
        </Row>
      </section> */}

      <style jsx>{`
        .witty-list {
          float: left;
          margin-top: 10px;
          font-size: 17px;
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
          padding: 7% 10%;
        }
        @media (max-width: 480px) {
          .intro-text {
            padding: 3% 5%;
            font-size: 22px;
          }
          .work-container {
            margin: 5%;
          }
        }
        `}
      </style>
    </Layout>
    )
  }
}