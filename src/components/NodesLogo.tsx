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
      <Icon source={'src/assets/nodes-app-icon.png'} width={32} height={32} />
      <Text style={{ fontWeight: '700', fontSize: '28px' }}>nodes</Text>
      <Tag bc="#2A4AF5" text="BETA" />
    </XStack>
  )
}

export default NodesLogo
