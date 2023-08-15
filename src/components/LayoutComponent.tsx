import { ReactNode } from 'react'
import './layout.css'

type LeftProps = {
  breadcrumbBar?: ReactNode
  content: ReactNode
  rightImageSrc?: string
}
function LayoutComponent(props: LeftProps) {
  return (
    <div className="layout">
      <section className="layout-left">
        {props.breadcrumbBar}
        <div className="container">{props.content}</div>
      </section>
      <LayoutRight rightImageSrc={props.rightImageSrc} />
    </div>
  )
}

function LayoutRight({ rightImageSrc }: { rightImageSrc?: string }) {
  return (
    <section className="layout-right">
      <div className="image-container">
        <img src={rightImageSrc} alt="background" />
      </div>
    </section>
  )
}

export default LayoutComponent
