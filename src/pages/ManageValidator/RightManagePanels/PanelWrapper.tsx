import { Text } from '@status-im/components'
import { useState } from 'react'
import ReactModal from 'react-modal'
import { useNavigate, useParams } from 'react-router-dom'
import { YStack } from 'tamagui'

import { PATHS } from '../../../constants'

type PanelWrapperProps = {
  children: React.ReactNode
  title: string
}

const PanelWrapper = ({ children, title }: PanelWrapperProps) => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const navigate = useNavigate()
  const { validatorName } = useParams()

  const closeModal = () => {
    setIsModalOpen(false)
    navigate(`${PATHS.MANAGE_VALIDATOR}/${validatorName}`)
  }

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
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
