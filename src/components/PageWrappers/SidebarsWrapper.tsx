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
      {!isNotRightSidebar && (
        <div className={styles['right-sidebar-wrapper']}>
          <RightSidebar />
        </div>
      )}
    </XStack>
  )
}

export default SidebarsWrapper
