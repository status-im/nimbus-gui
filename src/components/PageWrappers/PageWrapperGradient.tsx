import { ReactNode } from 'react'
import './layoutGradient.css'

type PageWrapperShadowProps = {
  children: ReactNode
}

const PageWrapperGradient = ({ children }: PageWrapperShadowProps) => {
  return <div className="layout">{children}</div>
}

export default PageWrapperGradient
