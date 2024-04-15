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
      style={{
        content: {
          borderRadius: '12px',
          width: '70%',
          margin: '0 auto',
        },
        overlay: {
          zIndex: 2,
        },
      }}
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
