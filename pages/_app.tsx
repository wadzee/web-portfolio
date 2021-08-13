import { useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline, Container } from '@material-ui/core'
import theme from 'src/themes'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Radzi Ramli</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link href="/favicon.png" rel="shortcut icon" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}
