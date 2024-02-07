import { Text } from '@status-im/components'
import { Stack, XStack } from 'tamagui'
import { ArrowLeftIcon } from '@status-im/icons'
import { useEffect, useState } from 'react'
import { FORM_STEPS } from '../../../constants'
type BackButtonProps = {
  prevPageIndex: number
  buttonState: 'disabled' | 'enabled' | 'pressed'
}

const BackButton = ({ prevPageIndex }: BackButtonProps) => {
  const [buttonState, setButtonState] = useState('disabled')
  useEffect(() => {
    const a = prevPageIndex > 0 ? 'enabled' : 'disabled'
    setButtonState(a)
  }, [prevPageIndex])

  const prevPageName = FORM_STEPS[prevPageIndex-1]?.label || 'Back'

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
        {prevPageName}
      </Text>
    </XStack>
  )
}

export default BackButton
