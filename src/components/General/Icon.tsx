import { Image } from '@status-im/components'

export type IconProps = {
  src: string
  width?: number
  height?: number
  onClick?: () => void
}

const Icon = ({ src, width = 16, height = 16, onClick }: IconProps) => {
  return (
    <div onClick={onClick}>
      <Image
        src={src}
        source={{ uri: src }}
        width={width}
        height={height}
        style={{ backgroundColor: 'transparent' }}
      />
    </div>
  )
}

export default Icon
