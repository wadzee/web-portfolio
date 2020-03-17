/* eslint-disable react/react-in-jsx-scope */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      // for better accessibility report on google lighthouse audit
      <Html lang='en'>
        <Head>
          <title>Radzi Ramli</title>
          <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0' />
          <meta name='description' 
            content='Radzi Ramli is a Software Engineer based in Kuala Lumpur, Malaysia who specializes in the MERN stack and is also an AWS Certified Solution Architect - Associate.' 
          />
          <link rel="canonical" href="http://radziramli.com/" />
          <meta name='keywords' content='radzi, radzi ramli, radzi ramli malaysia' />
          <link href='https://fonts.googleapis.com/css?family=Quicksand:300,400,700,800&display=swap' rel='stylesheet' />
          <link rel='preconnect' href='https://www.google-analytics.com' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon.png' />
          <meta content='/img/portfolio.webp' property='og:image' />
          <meta content='Online Web Portfolio | Radzi Ramli' property='og:description' />
          <meta content='Radzi Ramli' property='og:title' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument