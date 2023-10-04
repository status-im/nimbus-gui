import { Stack, XStack, YStack } from 'tamagui'
import { Button, InformationBox, Text } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'
import { useEffect, useState } from 'react'
import { generateMnemonic } from 'web-bip39'
import wordlist from 'web-bip39/wordlists/english'

type RecoveryPhraseProps = {
  isKeystoreFiles: boolean
}

const RecoveryPhrase = ({ isKeystoreFiles }: RecoveryPhraseProps) => {
  const [isReveal, setIsReveal] = useState(false)
  const [generatedMnemonic, setGeneratedMnemonic] = useState('')

  useEffect(() => {
    const getMnemonic = async () => {
      const mnemonic = await generateMnemonic(wordlist, 256)
      setGeneratedMnemonic(mnemonic)
    }
    getMnemonic()
  }, [])

  const revealHandler = () => {
    setIsReveal(state => !state)
  }

  return (
    <YStack space={'$4'} style={{ width: '100%', marginTop: isKeystoreFiles ? '20px' : '0px' }}>
      <Stack
        style={{
          border: `1px solid #2A4AF566`,
          borderRadius: '16px',
          padding: '28px 18px',
          backgroundColor: '#f4f6fe',
          width: '100%',
          height: '176px',
        }}
      >
        <YStack space={'$2'} style={{ filter: `blur(${isReveal ? '0px' : '4px'})` }}>
          <XStack space={'$6'}>
            <Text size={19} weight={'semibold'}>
              this is your secret recovery phrase for the validator
            </Text>
            <Text size={19} weight={'semibold'}>
              this is your secret recovery phrase for the validator
            </Text>
          </XStack>
          <XStack space={'$6'}>
            <Text size={19} weight={'semibold'}>
              this is your secret recovery phrase for the validator
            </Text>
            <Text size={19} weight={'semibold'}>
              this is your secret recovery phrase for the validator
            </Text>
          </XStack>
        </YStack>
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
