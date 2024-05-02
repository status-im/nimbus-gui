import { useState } from 'react'
import Modal from 'react-modal'
import { useNavigate, useParams } from 'react-router-dom'

import { MODAL_WIDTH, PATHS } from '../../../constants'
import { useWindowSize } from '../../../hooks/useWindowSize'
import PanelContent from './PanelContent'

type PanelWrapperProps = {
  children: React.ReactNode
  title: string
  fitContentHeight?: boolean
}

const PanelWrapper = ({
  children,
  title,
  fitContentHeight,
}: PanelWrapperProps) => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const navigate = useNavigate()
  const { validatorName } = useParams()
  const { width } = useWindowSize()
  const isModalWidth = width < MODAL_WIDTH

  const closeModal = () => {
    setIsModalOpen(false)
    navigate(`${PATHS.VALIDATOR_MANAGEMENT}/${validatorName}`)
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
              width: '76%',
              margin: 'auto',
              height: fitContentHeight ? 'fit-content' : 'auto',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'thin',
              border: '1px solid #F0F2F5',
            },
            overlay: {
              zIndex: 2,
              backdropFilter: 'blur(0.5px)',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
