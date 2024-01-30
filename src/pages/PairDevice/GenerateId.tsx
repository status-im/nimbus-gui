import { Button, Input, Text as StatusText } from '@status-im/components'
import { CompleteIdIcon, CopyIcon } from '@status-im/icons'
import { Text } from '@tamagui/web'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Separator, YStack } from 'tamagui'
import { v4 as uuidv4 } from 'uuid'

import styles from './pairDevice.module.css'
import { copyFunction } from '../../utilities'

type GenerateIdProps = {
  isAwaitingPairing: boolean
}

const GenerateId = ({ isAwaitingPairing }: GenerateIdProps) => {
  const [generatedId, setGeneratedId] = useState('')

  useEffect(() => {
    generateIdHandler()
  }, [])

  const generateIdHandler = () => {
    setGeneratedId(uuidv4())
  }

  const copyGeneratedIdHandler = () => {
    copyFunction(generatedId)
  }

  return (
    <YStack space={'$2'}>
      <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
        className={styles['regenerate-id-container']}
      >
        <StatusText size={19} weight={'semibold'}>
          Pair with Command line
        </StatusText>
        <Button
          variant="outline"
          size={32}
          icon={<CompleteIdIcon size={20} />}
          onPress={generateIdHandler}
        >
          Regenerate ID
        </Button>
      </div>
      <YStack space={'$2'}>
        <StatusText size={15} color={'#647084'}>
          Generated Pairing ID Input
        </StatusText>
        <Input
          placeholder={'nimbus pair <random-pairing-id>'}
          icon={
            <CopyIcon
              size={20}
              onClick={copyGeneratedIdHandler}
              style={{ cursor: 'pointer' }}
            />
          }
          value={generatedId}
          error={isAwaitingPairing}
        />
      </YStack>
      <StatusText size={13} weight={'medium'} color={'#647084'}>
        Please execute the following command with your randomly generated
        pairing id on the machine where the Nimbus Service is running.{' '}
        <Text style={{ fontStyle: 'italic', fontWeight: 'normal' }}>
          Learn how with our{' '}
        </Text>
        <Link style={{ textDecoration: 'underline', color: 'inherit' }} to="/">
          Documentation
        </Link>
        .
      </StatusText>
      <Separator borderColor={'#e3e3e3'} />
    </YStack>
  )
}

export default GenerateId
