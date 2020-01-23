import { Layout } from '../components/'
import { Row, Col } from 'antd'
import ReactGA from 'react-ga'
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
  }

  componentDidMount() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
      this.initializeGA()
    }
  }

  render () {
    const { color, textColor, lineColor, darkMode } = this.state
    const { front, back, witty } = text
    const settings = {
    }
    return (
      <Layout color={color} darkMode={darkMode} textColor={textColor}>
      <section className='main-container'>
        <Row className='body-width'>
          <div className='long-line' style={{ backgroundColor: lineColor, opacity: 0.7}} />
          <Col lg={12} md={24} sm={24} xs={24}>
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
                <Col lg={10} sm={8} xs={15}>
                {/* <a href='/static/file/resume.pdf' target='_blank'> */}
                  <div className='resume-btn'>
                      <span className='deselect' style={{ color: '#fff'}}>Grab My Resume</span>
                  </div>
                {/* </a> */}
                </Col>
            </div>
          </Col>
          <Col lg={12} sm={0} xs={0}>
            <div>
              <img src='/static/img/laptop.svg' className='main-image' />
            </div>
          </Col>
        </Row>
      </section>

      <section className='box-container' id='about-me'> 
        <Row className='row-width'>
          <Col lg={24} xs={24} sm={24}>
            <div className='intro-text section-container'>
              <span style={{ color: theme.color.secondary}}>01.</span> About Me
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
              Here are a list of technologies I can do:
              <br /> <br />
              <Row>
                <Col lg={9} xs={14}>
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
                <Col lg={9} xs={10}>
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
              <ul>
                {witty.map((txt, idx) => {
                  return (
                    <li key={idx} className='witty-list'>
                      {txt}
                    </li>
                  )
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </section>

      <section className='box-container' id='projects'> 
        <Row className='row-width'>
          <Col lg={24} xs={24} sm={24}>
            <div className='intro-text section-container'>
            <span style={{ color: theme.color.secondary}}>03.</span> Projects I've Worked On
              {/* <div className='construction'>
              <div>
                <img src='/static/img/construction.svg' style={{ width: '80%'}} />
              </div>
              Under Construction!
              </div> */}

            </div>
          </Col>
        </Row>
      </section>

      <style jsx>{`
        .witty-list {
          float: left;
          margin-top: 10px;
          font-size: 17px;
        }
        .construction {
          text-align: center;
          margin-top: 25%;
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
        @media (max-width: 480px) {
          .intro-text {
            padding: 3% 5%;
            font-size: 22px;
          }
          .construction {
            margin-top: 50%;
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