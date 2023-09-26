import { XStack } from 'tamagui'
import { Text } from '@status-im/components'
import { ReactNode } from 'react'

type IconTextProps = {
  icon: ReactNode
  children: string
  weight?: 'regular' | 'medium' | 'semibold'
}

const IconText = ({ icon, children, weight }: IconTextProps) => {
  return (
    <XStack
      style={{
        alignItems: 'center',
      }}
      space={'$2'}
    >
      {icon}
      <Text size={13} color={'#09101C'} weight={weight}>
        {children}
      </Text>
    </XStack>
  )
}

export default IconText
