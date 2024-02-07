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

  return (
    <XStack
    >
      <Stack
        }}
      >
        <ArrowLeftIcon
          size={16}
        ></ArrowLeftIcon>
      </Stack>
        {prevPage}
      </Text>
    </XStack>
  )
}

export default BackButton
