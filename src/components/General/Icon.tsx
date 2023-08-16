import { Image } from '@status-im/components'
import { Stack } from 'tamagui'

export type IconProps = {
  src: string
  width?: number
  height?: number
  onClick?: () => void
}

const Icon = ({ src, width = 16, height = 16, onClick }: IconProps) => {
  return (
    <Stack onClick={onClick} activeOpacity={0.7}>
      <Image
        src={src}
        source={{ uri: src }}
        width={width}
        height={height}
        style={{ backgroundColor: 'transparent' }}
      />
    </Stack>
  )
}

export default Icon
