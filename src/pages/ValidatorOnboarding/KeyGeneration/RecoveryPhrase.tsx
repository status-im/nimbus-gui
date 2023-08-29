import { Stack, YStack } from 'tamagui'
import { Button, InformationBox, Text } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'
import { useState } from 'react'

type RecoveryPhraseProps = {
  isKeyFiles: boolean
}

const RecoveryPhrase = ({ isKeyFiles }: RecoveryPhraseProps) => {
  const [isReveal, setIsReveal] = useState(false)

  const revealHandler = () => {
    setIsReveal(state => !state)
  }

  return (
    <YStack space={'$4'} style={{ width: '100%', marginTop: isKeyFiles ? '20px' : '0px' }}>
      <Stack
        style={{
          border: `1px solid #2A4AF566`,
          borderRadius: '16px',
          padding: '12px 16px',
          backgroundColor: '#f4f6fe',
          width: '100%',
        }}
      >
        <Stack style={{ filter: `blur(${isReveal ? '0px' : '4px'})` }}>
          <Text size={15} weight={'semibold'}>
            asdf
          </Text>
        </Stack>
      </Stack>
      <Stack style={{ width: 'fit-content', marginBottom: '12px' }}>
        <Button onPress={revealHandler}>Reveal Recovery Phrase</Button>
      </Stack>
      <InformationBox
        message="Write down and keep your Secret Recovery Phrase in a secure place. Make sure no one is looking at your screen."
        variant="error"
        icon={<CloseCircleIcon size={20} />}
      />
    </YStack>
  )
}

export default RecoveryPhrase
