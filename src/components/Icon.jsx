import { Image } from 'tamagui'

const Icon = ({ source, width = 16, height = 16, ...props }) => {
  return <Image {...props} source={{ uri: source }} width={width} height={height} />
}

export default Icon
