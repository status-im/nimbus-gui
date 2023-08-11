import { Text, XStack } from 'tamagui'
import Icon from './Icon'
import Tag from './Tag'

const NodesLogo = () => {
  return (
    <XStack
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      space={'$2'}
    >
      <Icon src={'src/assets/nodes-app-icon.png'} width={32} height={32} />
      <Text style={{ fontWeight: '700', fontSize: '28px' }}>nodes</Text>
      <Tag text="BETA" />
    </XStack>
  )
}

export default NodesLogo
