import { Text } from '@status-im/components'
import { ExpandRsIcon } from '@status-im/icons'
import { XStack, YStack } from 'tamagui'

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
      style={{ padding: isModalWidth ? 0 : '30px', alignItems: 'start' }}
    >
      <Breadcrumb
        breadcrumbList={[
          'Validator Management',
          'Manage Validator',
          'Migrate Panel',
        ]}
      />
      <XStack style={{ width: '100%', justifyContent: 'space-between' }}>
        <Text size={19} weight={'semibold'}>
          {title}
        </Text>
        {isModalWidth && (
          <ExpandRsIcon
            size={20}
            style={{ cursor: 'pointer' }}
            onClick={closeModal}
          />
        )}
      </XStack>
      {children}
    </YStack>
  )
}

export default PanelContent
