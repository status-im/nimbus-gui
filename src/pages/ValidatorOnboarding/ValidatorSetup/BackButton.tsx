import { Text } from '@status-im/components'
import { Stack, XStack } from 'tamagui'
import { ArrowLeftIcon } from '@status-im/icons'
import { useState } from 'react'
type BackButtonProps = {
  prevPage: string
  buttonState: 'disabled' | 'enabled' | 'pressed'
}
const BackButton = ({ prevPage }: BackButtonProps) => {
  const [buttonState, setButtonState] = useState('enabled')

  const buttonStyle = {
    color:
      buttonState === 'enabled'
        ? '09101C'
        : buttonState == 'disabled'
        ? 'CED4DB'
        : 'fff',
    fill: buttonState === 'pressed' ? '2A4AF5' : '',
    textColor: buttonState === 'disabled' ? 'CED4DB' : '09101C',
  }
  return (
    <XStack
      alignItems="center"
      space="$3"
      cursor={buttonState === 'pressed' ? 'pointer' : ''}
      onClick={() => console.log('gosho')}
      onMouseEnter={() => setButtonState('pressed')}
      onMouseLeave={() => setButtonState('enabled')}
    >
      <Stack
        style={{
          border: `1px solid #${buttonStyle.color}`,
          borderRadius: '8px',
          padding: '10px',
          backgroundColor: `#${buttonStyle.fill}`,
          background: `#${buttonStyle.fill}`,
        }}
      >
        <ArrowLeftIcon
          size={16}
          color={`#${buttonStyle.color}`}
        ></ArrowLeftIcon>
      </Stack>
      <Text size={15} color={`#${buttonStyle.textColor}`} weight={'regular'}>
        {prevPage}
      </Text>
    </XStack>
  )
}

export default BackButton
