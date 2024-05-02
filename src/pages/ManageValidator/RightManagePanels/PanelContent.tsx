import { Text } from '@status-im/components'
import { ExpandRsIcon } from '@status-im/icons'
import { Separator, XStack, YStack } from 'tamagui'

import Breadcrumb from '../../../components/General/Breadcrumb/Breadcrumb'

type PanelContentProps = {
  children: React.ReactNode
  title: string
  closeModal?: () => void
  isModalWidth?: boolean
}

const PanelContent = ({
  children,
  title,
  closeModal,
  isModalWidth,
}: PanelContentProps) => {
  return (
    <YStack
      space={'$3'}
      style={{
        padding: isModalWidth ? 0 : '20px 30px',
        alignItems: 'start',
        overflowY: 'scroll',
      }}
    >
      {isModalWidth && (
        <XStack
          style={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <YStack space={'$1'}>
            <Breadcrumb />
            <Separator borderColor={'#F0F2F5'} marginTop={'6px'} />
          </YStack>
          <ExpandRsIcon
            size={20}
            style={{ cursor: 'pointer' }}
            onClick={closeModal}
          />
        </XStack>
      )}
      <Text size={19} weight={'semibold'}>
        {title}
      </Text>
      {children}
    </YStack>
  )
}

export default PanelContent
