import { Text } from '@status-im/components'
import { useState } from 'react'
import ReactModal from 'react-modal'
import { YStack } from 'tamagui'

type PanelWrapperProps = {
  children: React.ReactNode
  title: string
}

const PanelWrapper = ({ children, title }: PanelWrapperProps) => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  return (
    <ReactModal
      isOpen={isModalOpen}
    >
      <YStack space={'$3'} style={{ padding: '30px', alignItems: 'start' }}>
        <Text size={19} weight={'semibold'}>
          {title}
        </Text>
        {children}
      </YStack>
    </ReactModal>
  )
}

export default PanelWrapper
