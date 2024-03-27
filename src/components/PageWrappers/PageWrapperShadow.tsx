import { ReactNode } from 'react'
import { useTheme } from 'tamagui'

import NimbusLogoMark from '../Logos/NimbusLogoMark'
import styles from './page-wrapper-shadow.module.css'

type PageWrapperShadowProps = {
  breadcrumbBar?: ReactNode
  rightImageSrc?: string
  rightImageLogo?: boolean
  children: ReactNode
  imgHeight?: string
}

const PageWrapperShadow = ({
  breadcrumbBar,
  rightImageSrc,
  rightImageLogo,
  children,
  imgHeight,
}: PageWrapperShadowProps) => {
  const theme = useTheme()

  return (
    <div
      className={styles['layout']}
      style={{ backgroundColor: theme.background.val }}
    >
      <section className={styles['layout-left']}>
        {breadcrumbBar}
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
          {rightImageLogo ? <NimbusLogoMark /> : null}
        </div>
      </section>
    </div>
  )
}

export default PageWrapperShadow
