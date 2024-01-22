import { Image } from 'tamagui'

export type IconProps = {
  src: string
  width?: number
  height?: number
}

const Icon = ({ src, height = 100, width = 100 }: IconProps) => {
  return <Image src={src} source={{ uri: src }} height={height} width={width} />
}

export default Icon
