import { Text } from '@status-im/components'
import { XStack } from 'tamagui'

const BetaTag = () => {
  return (
    <XStack
      style={{
        backgroundColor: '#2A4AF5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px 6px',
        borderRadius: '67px',
      }}
    >
      <Text size={11} color="#fff">
        BETA
      </Text>
    </XStack>
  )
}

export default BetaTag
