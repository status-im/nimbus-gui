import { ReactNode } from 'react'
import './layout.css'

type LeftProps = {
  breadcrumbBar?: ReactNode
  content: ReactNode
}
function LayoutComponent(props: LeftProps) {
  return (
    <div className="layout">
      <section className="layout-left">
        {props.breadcrumbBar}
        <div className="container">{props.content}</div>
      </section>
      <LayoutRight />
    </div>
  )
}

function LayoutRight() {
  return (
    <section className="layout-right">
      <div className="image-container">
        <img src="src/assets/bg-img/landing-page-bg.png" alt="" />
        {/* <img src="src/assets/bg-img/day-night-bg.png" alt="" /> */}
        {/* <img src="src/assets/bg-img/key-lock-bg.png" alt="" /> */}
      </div>
    </section>
  )
}

export default LayoutComponent
