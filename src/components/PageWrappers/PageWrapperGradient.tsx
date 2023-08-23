import { ReactNode } from 'react'
import './layoutGradient.css'

type PageWrapperGradientProps = {
  children: ReactNode
}

const PageWrapperGradient = ({ children }: PageWrapperGradientProps) => {
  return <div className="layout  gradient-wrapper">{children}</div>
}

export default PageWrapperGradient
