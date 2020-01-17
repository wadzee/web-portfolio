import { Layout } from '../components/'
import { Row, Col } from 'antd'
import './styles.css'



export default class App extends React.Component {
  
  // state = {
  //   width: 0,
  //   height: 0
  // }

  // componentDidMount() {
  //   const { width, height } = window.screen
  //   this.setState({ width, height })
  // }

  render () {
    return (
      <Layout title='Home'>
      <div className='long-line' />
      <section className='main-container'>
        <Row className='body-width'>
          <Col lg={12} xs={24}>
            <div className='text-box'>
                <div className='hello-text deselect'>Hello, I'm</div>
                <div className='name-text deselect'><span style={{ color: '#6B5858', marginRight: 7 }}>{'{'}</span>Radzi Ramli<span style={{ color: '#6B5858', marginLeft: 8}}>{'}'}</span></div>
                <div className='position-text deselect'>Full Stack Developer</div>
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
    </Layout>
    )
  }
}