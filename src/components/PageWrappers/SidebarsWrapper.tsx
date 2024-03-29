import { ReactNode } from 'react'
import { XStack } from 'tamagui'

import LeftSidebar from '../General/LeftSidebar/LeftSidebar'
import RightSidebar from '../General/RightSideBar/RightSidebar'
import styles from './sidebars-wrapper.module.css'

type SidebarsWrapperProps = {
  children: ReactNode
  isNotLeftSidebar?: boolean
  isNotRightSidebar?: boolean
  isNotSidePadding?: boolean
}

const SidebarsWrapper = ({
  children,
  isNotLeftSidebar,
  isNotRightSidebar,
  isNotSidePadding,
}: SidebarsWrapperProps) => {
  return (
    <XStack style={{ minHeight: '100vh' }}>
      {!isNotLeftSidebar && <LeftSidebar />}
      <div
        style={{
          display: 'flex',
          flexGrow: '1',
          padding: `20px ${isNotSidePadding ? 0 : 20}px`,
          overflowY: 'auto',
          height: 'fit-content',
        }}
      >
        {children}
      </div>
      {!isNotRightSidebar && (
        <div className={styles['right-sidebar-wrapper']}>
          <RightSidebar />
        </div>
      )}
    </XStack>
  )
}

export default SidebarsWrapper
