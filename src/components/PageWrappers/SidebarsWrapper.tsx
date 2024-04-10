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
  isNotVerticalPadding?: boolean
}

const SidebarsWrapper = ({
  children,
  isNotLeftSidebar,
  isNotRightSidebar,
  isNotSidePadding,
  isNotVerticalPadding,
}: SidebarsWrapperProps) => {
  return (
    <XStack style={{ minHeight: '100vh' }}>
      {!isNotLeftSidebar && <LeftSidebar />}
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          padding: `${isNotVerticalPadding ? 0 : 12}px ${isNotSidePadding ? 0 : 20}px`,
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
