import { Layout } from '../components/'
import { Row, Col } from 'antd'
import { text } from '../config'
import Emoji from 'a11y-react-emoji'
import './styles.css'



export default class App extends React.Component {
  
  state = {
    color: '',
    textColor: '',
    lineColor: '',
    darkMode: false
  }

  componentDidMount() {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (darkMode) {
      this.setState({ textColor: '#fff', lineColor: '#45B29A', color: '#171c28', darkMode})
    } else this.setState({ textColor: '#6B5858', color: '#fff', darkMode})
  }

  render () {
    const { color, textColor, lineColor, darkMode } = this.state
    const { front, back } = text
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
              01. About Me
              <div className='describe-me'>
              Hello! I'm Radzi, a software engineer who<span style={{ color: '#45B29A' }}> recently just graduated from University Malaysia Sarawak</span> where I majored in Computer 
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

      {/* <section className='box-container' id='work'> 
        <Row style={{ flex: 1 }}>
          <Col lg={{ span: 14, offset: 8 }} xs={24}>
            <div className='intro-text'>
              02. Some Things I've Build
              <div className='describe-me'>
              Hello! I'm Radzi, a software engineer who<span style={{ color: '#45B29A' }}> recently just graduated from University Malaysia Sarawak</span> where I majored in Computer 
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
                <Col lg={10} xs={14}>
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
      </section> */}

      <style jsx>{`
        .list-wrapper {
          
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
        }
        `}
      </style>
    </Layout>
    )
  }
}