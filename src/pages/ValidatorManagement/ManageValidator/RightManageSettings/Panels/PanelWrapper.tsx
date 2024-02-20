import { YStack } from 'tamagui'

type PanelWrapperProps = {
  children: React.ReactNode
}

const PanelWrapper = ({ children }: PanelWrapperProps) => {
  return (
    <YStack space={'$2'} style={{ padding: '30px', alignItems: 'start' }}>
      {children}
    </YStack>
  )
}

export default PanelWrapper
