import { Text } from '@status-im/components'
import { Stack, XStack } from 'tamagui'
import { ArrowLeftIcon } from '@status-im/icons'
import { useEffect, useState } from 'react'
import { FORM_STEPS } from '../../../constants'

type BackButtonProps = {
  prevPageIndex: number
}

const BackButton = ({ prevPageIndex }: BackButtonProps) => {
  const [buttonState, setButtonState] = useState<
    'disabled' | 'enabled' | 'pressed'
  >('disabled')

  useEffect(() => {
    setButtonState(prevPageIndex > 0 ? 'enabled' : 'disabled')
  }, [prevPageIndex])

  const prevPageName = FORM_STEPS[prevPageIndex - 1]?.label || 'Back'

  const handleMouseEnter = () => {
    if (buttonState === 'enabled') {
      setButtonState('pressed')
    }
  }

  const handleMouseLeave = () => {
    if (buttonState === 'pressed') {
      setButtonState('enabled')
    }
  }

  const buttonStyle = {
    color:
      buttonState === 'enabled'
        ? '09101C'
        : buttonState === 'disabled'
        ? 'CED4DB'
        : 'fff',
    fill: buttonState === 'pressed' ? '2A4AF5' : '',
    textColor: buttonState === 'disabled' ? 'CED4DB' : '09101C',
  }

  return (
    <XStack
      alignItems="center"
      space="$3"
      cursor={buttonState !== 'disabled' ? 'pointer' : 'default'}
      onClick={() =>
        buttonState !== 'disabled' && console.log('Back button clicked')
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Stack
        style={{
          border: `1px solid #${buttonStyle.color}`,
          borderRadius: '8px',
          padding: '10px',
          backgroundColor: `#${buttonStyle.fill}`,
        }}
      >
        <ArrowLeftIcon size={16} color={`#${buttonStyle.color}`} />
      </Stack>
      <Text size={15} color={`#${buttonStyle.textColor}`} weight={'semibold'}>
        {prevPageName}
      </Text>
    </XStack>
  )
}

export default BackButton
