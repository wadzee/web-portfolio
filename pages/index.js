import { Layout } from '../components/'
import { Row, Col } from 'antd'
import './styles.css'



export default class App extends React.Component {
  
  state = {
    color: '',
    textColor: '',
    lineColor: ''
  }

  componentDidMount() {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (darkMode) {
      this.setState({ textColor: '#fff', lineColor: '#45B29A', color: '#171c28'})
    } else this.setState({ textColor: '#6B5858', color: '#fff'})
  }

  render () {
    const { color, textColor, lineColor } = this.state
    return (
      <Layout color={color}>
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
                <div className='resume-btn'>
                  <span className='deselect'>Grab My Resume</span>
                </div>
            </div>
          </Col>
          <Col lg={12} xs={0}>
            <div>
              <img src='/static/img/laptop.svg' className='main-image' />
            </div>
          </Col>
        </Row>
      </section>

      <section className='about-container border-section'>
        <Row style={{ flex: 1 }}>
          <Col lg={24} xs={24}>
            <div className='intro-text'>
              Under Construction!
            </div>
          </Col>
          {/* <Col lg={12} xs={24}>
            <div>

            </div>
          </Col> */}
        </Row>
      </section>

      <style jsx>{`
        .intro-text {
          z-index: 20;
          color: ${textColor};
          font-weight: bold;
          font-size: 25pt;
          text-align: center;
          padding: 10%;
      }
        `}
      </style>
    </Layout>
    )
  }
}