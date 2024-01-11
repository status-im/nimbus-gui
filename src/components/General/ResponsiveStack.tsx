import { CSSProperties, ReactNode } from 'react'
import { XStack, YStack } from 'tamagui'

type ResponsiveStackProps = {
  isVerticalAligned?: boolean
  children: ReactNode
  space?: string
  style?: CSSProperties
}

const ResponsiveStack = ({ isVerticalAligned, children, space, style }: ResponsiveStackProps) => {
  if (isVerticalAligned) {
    return <YStack space={space} style={style}>{children}</YStack>
  }

  return <XStack space={space} style={style}>{children}</XStack>
}

export default ResponsiveStack
