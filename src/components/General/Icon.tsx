import { Image } from 'tamagui'

export type IconProps = {
  src: string
  width?: string
  height?: string
}

const Icon = ({ src, width = '16px', height = '16px' }: IconProps) => {
  return (
    <Image
      src={src}
      source={{ uri: src }}
      width={'70%'}
      height={100}
      style={{ backgroundColor: 'transparent' }}
      minWidth={'110px'}
    />
  )
}

export default Icon
