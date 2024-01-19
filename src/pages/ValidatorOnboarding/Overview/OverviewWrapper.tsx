import { ReactNode } from 'react'
import { useTheme } from 'tamagui'

import styles from './validatorLayout.module.css'

type OverviewWrapperProps = {
  rightImageSrc?: string
  children: ReactNode
  imgHeight?: string
}

const OverviewWrapper = ({
  rightImageSrc,

  children,
  imgHeight,
}: OverviewWrapperProps) => {
  const theme = useTheme()

  return (
    <div className={styles['layout']} style={{ backgroundColor: theme.background.val }}>
      <section className={styles['layout-left']}>
        <div className={styles['container']}>
          <div className={styles['container-inner']}>{children}</div>
        </div>
      </section>
      <section className={styles['layout-right']}>
        <div className={styles['image-container']}>
          <img
            src={rightImageSrc}
            alt="background"
            className={styles['background-img']}
            style={{ height: imgHeight }}
          />
        </div>
      </section>
    </div>
  )
}

export default OverviewWrapper
