import { Stack, XStack, YStack } from 'tamagui'
import { Button, InformationBox, Text } from '@status-im/components'
import { CloseCircleIcon, CopyIcon, CheckIcon } from '@status-im/icons'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../../redux/store'
import { copyFunction } from '../../../utilities'
import styles from './index.module.css'

type RecoveryPhraseProps = {
  isKeystoreFiles: boolean
}

const RecoveryPhrase = ({ isKeystoreFiles }: RecoveryPhraseProps) => {
  const [isReveal, setIsReveal] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const { generatedMnemonic } = useSelector(
    (state: RootState) => state.keyGeneration,
  )

  useEffect(() => {
    setIsCopied(false)
  }, [generatedMnemonic])

  const revealHandler = () => {
    setIsReveal(state => !state)
  }

  const copyRecoveryPhraseHandler = () => {
    copyFunction(generatedMnemonic.join(' '))

    if (isCopied === false) {
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    }
  }

  return (
    <YStack
      space={'$4'}
      style={{ width: '100%', marginTop: isKeystoreFiles ? '20px' : '0px' }}
    >
      <YStack
        style={{
          border: `1px solid #2A4AF566`,
          borderRadius: '16px',
          backgroundColor: '#f4f6fe',
          width: '100%',
          alignItems: 'end',
          cursor: 'pointer',
          paddingBottom: '8px',
          paddingRight: '18px',
          paddingLeft: '18px',
        }}
        onClick={copyRecoveryPhraseHandler}
      >
        <div
          style={{
            filter: `blur(${isReveal ? '0px' : '4px'})`,
          }}
          className={styles['recovery-phrase']}
        >
          {generatedMnemonic.length === 24 &&
            generatedMnemonic.map((word, index) => (
              <XStack style={{ width: '100%' }} key={word + index}>
                <Stack>
                  <Text
                    key={index}
                    size={19}
                    weight={'semibold'}
                    color="#0d162566"
                  >
                    {index + 1}.&nbsp;
                  </Text>
                </Stack>
                <Text key={index} size={19} weight={'semibold'}>
                  {word}
                </Text>
              </Stack>
              <Text key={index} size={19} weight={'semibold'}>
                {word}
              </Text>
            </XStack>
          ))}
        </div>
        {isCopied ? <CheckIcon size={20} /> : <CopyIcon size={20} />}
      </YStack>
      <Stack style={{ width: 'fit-content', marginBottom: '12px' }}>
        <Button onPress={revealHandler}>
          {isReveal ? 'Hide Recovery Phrase' : 'Reveal Recovery Phrase'}
        </Button>
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
