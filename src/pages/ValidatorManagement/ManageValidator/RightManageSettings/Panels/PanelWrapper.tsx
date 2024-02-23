import { Text } from '@status-im/components'
import { YStack } from 'tamagui'

type PanelWrapperProps = {
  children: React.ReactNode
  title: string
}

const PanelWrapper = ({ children, title }: PanelWrapperProps) => {
  return (
    <YStack space={'$3'} style={{ padding: '30px', alignItems: 'start' }}>
      <Text size={19} weight={'semibold'}>
        {title}
      </Text>
      {children}
    </YStack>
  )
}

export default PanelWrapper
