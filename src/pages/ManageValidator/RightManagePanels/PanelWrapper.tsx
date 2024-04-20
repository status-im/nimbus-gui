import { useState } from 'react'
import Modal from 'react-modal'
import { useNavigate, useParams } from 'react-router-dom'

import { MODAL_WIDTH, PATHS } from '../../../constants'
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
  const isModalWidth = width < MODAL_WIDTH

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
              width: '75%',
              margin: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: 'transparent transparent',
              height: 'fit-content',
            },
            overlay: {
              zIndex: 2,
            },
          }}
          ariaHideApp={false}
        >
          <PanelContent
            title={title}
            closeModal={closeModal}
            isModalWidth={isModalWidth}
          >
            {children}
          </PanelContent>
        </Modal>
      ) : (
        <PanelContent title={title}>{children}</PanelContent>
      )}
    </>
  )
}

export default PanelWrapper
