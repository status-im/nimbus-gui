import { Button } from 'tamagui'
import { ReactNode } from 'react'

type ReactButtonProps = {
  children: string
  style?: unknown
  icon?: ReactNode
  size?: string
  onClick?: () => void
}

const ReactButton = ({ children, ...props }: ReactButtonProps) => {
  return <Button {...props}>{children}</Button>
}

export default ReactButton
