import { ReactNode } from 'react'
import './layout.css'

type PageWrapperShadowProps = {
  breadcrumbBar?: ReactNode
  content: ReactNode
  rightImageSrc?: string
}

const PageWrapperShadow = ({ breadcrumbBar, content, rightImageSrc }: PageWrapperShadowProps) => {
  return (
    <div className="layout">
      <section className="layout-left">
        {breadcrumbBar}
        <div className="container">{content}</div>
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
