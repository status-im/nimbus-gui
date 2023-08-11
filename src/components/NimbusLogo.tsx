import { Text, XStack } from 'tamagui'
import Icon from './Icon'
import Tag from './Tag'

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
      <Text style={{ fontWeight: '650', fontSize: '24px' }}>Nimbus</Text>
      <Tag text="BETA" />
    </XStack>
  )
}

export default NimbusLogo
