import { XStack } from 'tamagui'
import Icon from '../General/Icon'
import BetaTag from './BetaTag'
import { Text } from '@status-im/components'

const NodesLogo = () => {
  return (
    <XStack
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      space={'$2'}
    >
      <Icon src={'./icons/nodes-app-icon.png'} width={32} height={32} />
      <Text size={27} weight={'semibold'}>
        nodes
      </Text>
      <BetaTag />
    </XStack>
  )
}

export default NodesLogo
