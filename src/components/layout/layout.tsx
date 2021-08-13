import { Box, Typography, makeStyles } from '@material-ui/core'
import Menu from '@material-ui/icons/MenuRounded'
import { Row } from 'components/styles'
import Link from 'next/link'

type LayoutProps = {
  children: React.ReactNode
}

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  avatar: {
    width: 78,
    cursor: 'pointer'
  },
  icon: {
    fontSize: 35,
    color: palette.primary.main,
    cursor: 'pointer',
    [breakpoints.down('md')]: {
      fontSize: 50
    }
  }
}))

export default function Layout({ children }: LayoutProps) {
  return (
    <Box minHeight="100vh" position="relative">
      <>
        <Header />
        {children}
        <Footer />
      </>
    </Box>
  )
}

const Header = () => {
  const styles = useStyles()
  return (
    <Row justifyContent="space-between" py={2}>
      <Link href="/">
        <img src="/images/avatar.webp" className={styles.avatar} />
      </Link>
      <Menu className={styles.icon} />
    </Row>
  )
}

const Footer = () => {
  return (
    <Box
      height={30}
      position="absolute"
      bottom={0}
      width="100%"
      display="flex"
      justifyContent="center">
      <Typography>Copyright © Radzi Ramli (2021)</Typography>
    </Box>
  )
}
