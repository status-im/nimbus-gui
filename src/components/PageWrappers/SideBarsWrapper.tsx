import { ReactNode } from 'react'
import { XStack } from 'tamagui'

import LeftSidebar from '../General/LeftSidebar/LeftSidebar'
import RightSidebar from '../General/RightSideBar/RightSidebar'
import styles from './sidebars-wrapper.module.css'

type SidebarsWrapperProps = {
  children: ReactNode
  isNotLeftSideBar?: boolean
  isNotRightSideBar?: boolean
}

const SidebarsWrapper = ({
  children,
  isNotLeftSideBar,
  isNotRightSideBar,
}: SidebarsWrapperProps) => {
  return (
    <XStack style={{ height: '100vh' }}>
      {!isNotLeftSideBar && <LeftSidebar />}
      {children}
      {!isNotRightSideBar && (
        <div className={styles['right-sidebar-wrapper']}>
          <RightSidebar />
        </div>
      )}
    </XStack>
  )
}

export default SidebarsWrapper
