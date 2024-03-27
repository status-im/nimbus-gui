import { ReactNode } from 'react'
import { XStack } from 'tamagui'

import LeftSidebar from '../General/LeftSidebar/LeftSidebar'
import RightSidebar from '../General/RightSideBar/RightSidebar'
import styles from './side-bars-wrapper.module.css'

type SideBardsWrapperProps = {
  children: ReactNode
  isNotLeftSideBar?: boolean
  isNotRightSideBar?: boolean
}

const SideBarsWrapper = ({
  children,
  isNotLeftSideBar,
  isNotRightSideBar,
}: SideBardsWrapperProps) => {
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

export default SideBarsWrapper
