import { XStack } from 'tamagui'
import Icon from './Icon'
import Tag from './Tag'
import { Text } from '@status-im/components'

const NimbusLogo = () => {
  return (
    <XStack
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      space={'$2'}
    >
      <Icon src={'/icons/marks.png'} width={55} height={60} />
      <Text size={27} weight={'medium'}>
        Nimbus
      </Text>
      <Tag text="BETA" />
    </XStack>
  )
}

export default NimbusLogo
