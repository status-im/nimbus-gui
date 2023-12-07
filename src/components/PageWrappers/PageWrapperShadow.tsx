import { ReactNode } from 'react'
import { useTheme } from 'tamagui'

import NimbusLogoMark from '../Logos/NimbusLogoMark'
import './layout.css'

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
    <div className="layout" style={{ backgroundColor: theme.background.val }}>
      <section className="layout-left">
        {breadcrumbBar}
        <div className="container">
          <div className="container-inner">{children}</div>
        </div>
      </section>
      <section className="layout-right">
        <div className="image-container">
          <img
            src={rightImageSrc}
            alt="background"
            className="background-img"
            style={{ height: imgHeight }}
          />
          {rightImageLogo ? <NimbusLogoMark /> : null}
        </div>
      </section>
    </div>
  )
}

export default PageWrapperShadow
