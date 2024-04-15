import { Text } from '@status-im/components'
import { ExpandRsIcon } from '@status-im/icons'
import { XStack, YStack } from 'tamagui'

type PanelContentProps = {
  children: React.ReactNode
  title: string
  closeModal: () => void
}

const PanelContent = ({ children, title, closeModal }: PanelContentProps) => {
  return (
    <YStack space={'$3'} style={{ padding: '30px', alignItems: 'start' }}>
      <XStack style={{ width: '100%', justifyContent: 'space-between' }}>
        <Text size={19} weight={'semibold'}>
          {title}
        </Text>
        <ExpandRsIcon
          size={20}
          style={{ cursor: 'pointer' }}
          onClick={closeModal}
        />
      </XStack>
      {children}
    </YStack>
  )
}

export default PanelContent
