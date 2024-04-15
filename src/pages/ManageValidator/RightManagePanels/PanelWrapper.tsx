import { useState } from 'react'
import Modal from 'react-modal'
import { useNavigate, useParams } from 'react-router-dom'

import { PATHS } from '../../../constants'
import { useWindowSize } from '../../../hooks/useWindowSize'
import PanelContent from './PanelContent'

type PanelWrapperProps = {
  children: React.ReactNode
  title: string
}

const PanelWrapper = ({ children, title }: PanelWrapperProps) => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const navigate = useNavigate()
  const { validatorName } = useParams()
  const { width } = useWindowSize()
  const isModalWidth = width < 1160

  const closeModal = () => {
    setIsModalOpen(false)
    navigate(`${PATHS.MANAGE_VALIDATOR}/${validatorName}`)
  }

  return (
    <>
      {isModalWidth ? (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              borderRadius: '12px',
              width: '70%',
              margin: '0 auto',
              scrollbarWidth: 'thin',
              scrollbarColor: 'transparent transparent',
            },
            overlay: {
              zIndex: 2,
            },
          }}
        >
          <PanelContent title={title} closeModal={closeModal}>
            {children}
          </PanelContent>
        </Modal>
      ) : (
        <div>
          <PanelContent title={title} closeModal={closeModal}>
            {children}
          </PanelContent>
        </div>
      )}
    </>
  )
}

export default PanelWrapper
