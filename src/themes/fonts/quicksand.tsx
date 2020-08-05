import QuicksandRegular from 'fonts/Quicksand-Regular.ttf'
import QuicksandMedium from 'fonts/Quicksand-Medium.ttf'
import QuicksandBold from 'fonts/Quicksand-Bold.ttf'

type FontFace = {
  fontStyle?: string
  fontWeight?: number
  fontUrl?: string
  src?: string
}

const makeFont = ({ fontStyle = 'normal', fontWeight, fontUrl }: FontFace) => ({
  fontFamily: 'Quicksand',
  fontDisplay: 'swap',
  fontStyle,
  fontWeight,
  src: `url(${fontUrl})`
})

const fonts: FontFace[] = [
  {
    fontWeight: 400,
    fontUrl: QuicksandRegular
  },
  {
    fontWeight: 500,
    fontUrl: QuicksandMedium
  },
  {
    fontWeight: 600,
    fontUrl: QuicksandBold
  }
].map((font) => {
  return makeFont(font)
})

export default fonts
