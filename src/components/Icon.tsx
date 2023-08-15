import { Image } from '@status-im/components'

export type IconProps = {
  src: string
  width?: number
  height?: number
}

const Icon = ({ src, width = 16, height = 16 }: IconProps) => {
  return <Image src={src} source={{ uri: src }} width={width} height={height} />
}

export default Icon
