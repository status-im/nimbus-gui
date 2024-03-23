import { Button, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

import PanelWrapper from './PanelWrapper'

const ExitPanel = () => {
  const exitQueue = 603
  const exitValidatorHandler = () => {}

  return (
    <PanelWrapper title={'Exit Validator'}>
      <YStack alignItems={'flex-start'} marginTop={'6px'}>
        <Text size={15} weight="semibold">
          Validator Exit Queue
        </Text>
        <Text size={27} weight="semibold" color="#2A4AF5">
          {exitQueue}
        </Text>
      </YStack>
      <YStack
        space={'$3'}
        style={{
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '6px',
        }}
      >
        <img
          src="/public/images/exit-validator.png"
          alt="exit validator"
          style={{ width: '300px' }}
        />
        <div style={{ width: '73%' }}>
          <Text size={15} color="#2A4AF5">
            You are about to Exit your validator it is not possible for you to
            revert this action! Please make sure you understand the
            consequences.
          </Text>
        </div>
      </YStack>
      <XStack
        style={{ width: '100%', justifyContent: 'end', marginTop: '6px' }}
      >
        <Button onPress={exitValidatorHandler}>Exit Validator</Button>
      </XStack>
    </PanelWrapper>
  )
}

export default ExitPanel
