import { Image } from 'tamagui'

export type IconProps = {
  source: string
  width?: number
  height?: number
}

const Icon = ({ source, width = 16, height = 16, ...props }: IconProps) => {
  return <Image {...props} source={{ uri: source }} width={width} height={height} />
}

export default Icon
