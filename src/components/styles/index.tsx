import { withStyles } from '@material-ui/core/styles'
import Box, { BoxProps } from '@material-ui/core/Box'

export function Row({ children, ...rest }: BoxProps) {
  const Row = withStyles({
    root: {
      display: 'flex',
      alignItems: 'center'
    }
  })(Box)

  return <Row {...rest}>{children}</Row>
}
