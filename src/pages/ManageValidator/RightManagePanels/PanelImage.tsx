import { Text } from '@status-im/components'
import { YStack } from 'tamagui'

import { useWindowSize } from '../../../hooks/useWindowSize'
import { MODAL_WIDTH } from '../../../constants'

type PanelImageProps = {
  imagePath: string
  text: string
}

const PanelImage = ({ imagePath, text }: PanelImageProps) => {
  const { width } = useWindowSize()
  const isModalWidth = width < MODAL_WIDTH

  return (
    <YStack
      space={'$3'}
      style={{
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: '6px',
      }}
    >
      <img
        src={`/images/${imagePath}`}
        alt={imagePath}
        style={{ width: isModalWidth ? '200px' : '300px' }}
      />
      <div style={{ width: '73%' }}>
        <Text size={15}>{text}</Text>
      </div>
    </YStack>
  )
}

export default PanelImage
