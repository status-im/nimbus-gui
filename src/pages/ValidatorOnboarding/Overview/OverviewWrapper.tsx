import { ReactNode } from 'react'
import { useTheme } from 'tamagui'

import './validatorLayout.css'

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
    <div className="layout" style={{ backgroundColor: theme.background.val }}>
      <section className="layout-left">
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
        </div>
      </section>
    </div>
  )
}

export default OverviewWrapper
