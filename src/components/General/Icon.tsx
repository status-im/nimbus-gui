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
      width={'50%'}
      height={90}
      style={{ backgroundColor: 'transparent' }}
      minWidth={'90px'}
    />
  )
}

export default Icon
