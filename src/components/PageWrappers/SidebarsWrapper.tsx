import { ReactNode } from 'react'
import { XStack } from 'tamagui'

import LeftSidebar from '../General/LeftSidebar/LeftSidebar'
import RightSidebar from '../General/RightSideBar/RightSidebar'
import styles from './sidebars-wrapper.module.css'

type SidebarsWrapperProps = {
  children: ReactNode
  isNotLeftSidebar?: boolean
  isNotRightSidebar?: boolean
  isNotLeftPadding?: boolean
  isNotRightPadding?: boolean
  isNotTopPadding?: boolean
  isNotBottomPadding?: boolean
}

const SidebarsWrapper = ({
  children,
  isNotLeftSidebar,
  isNotRightSidebar,
  isNotLeftPadding,
  isNotRightPadding,
  isNotTopPadding,
  isNotBottomPadding,
}: SidebarsWrapperProps) => {
  return (
    <XStack style={{ minHeight: '100vh' }}>
      {!isNotLeftSidebar && <LeftSidebar />}
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          padding: `${isNotTopPadding ? 0 : '12px'} ${
            isNotRightPadding ? 0 : '20px'
          } ${isNotBottomPadding ? 0 : '12px'} ${
            isNotLeftPadding ? 0 : '20px'
          }`,
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
