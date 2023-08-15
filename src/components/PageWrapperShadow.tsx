import { ReactNode } from 'react'
import './layout.css'

type PageWrapperShadowProps = {
  breadcrumbBar?: ReactNode
  rightImageSrc?: string
  children: ReactNode
}

const PageWrapperShadow = ({ breadcrumbBar, rightImageSrc, children }: PageWrapperShadowProps) => {
  return (
    <div className="layout">
      <section className="layout-left">
        {breadcrumbBar}
        <div className="container">
          <div className="container-inner">{children}</div>
        </div>
      </section>
      <section className="layout-right">
        <div className="image-container">
          <img src={rightImageSrc} alt="background" />
        </div>
      </section>
    </div>
  )
}

export default PageWrapperShadow
