import { XStack, YStack } from 'tamagui'
import { Button, Input, Text } from '@status-im/components'
import { ClearIcon } from '@status-im/icons'

import BorderBox from '../../../components/General/BorderBox'
import { useState } from 'react'

const PasswordFields = () => {
  const [encryptedPassword, setEncryptedPassword] = useState('')
  const [confirmEncryptedPassword, setConfirmEncryptedPassword] = useState('')

  const generateKeyFilesHandler = () => {}

  const changeEncryptedPasswordHandler = (e: any) => {
    setEncryptedPassword(e.target.value)
  }

  const changeConfirmEncryptedPasswordHandler = (e: any) => {
    setConfirmEncryptedPassword(e.target.value)
  }

  const clearEncryptedPasswordHandler = () => {
    setEncryptedPassword('')
  }

  const clearConfirmEncryptedPasswordHandler = () => {
    setConfirmEncryptedPassword('')
  }

  return (
    <YStack space={'$2'}>
      <XStack space={'$2'} style={{ justifyContent: 'space-between' }}>
        <YStack space={'$1'}>
          <YStack space={'$2'}>
            <Text size={15} color={'#647084'}>
              Encryption Password
            </Text>
            <Input
              placeholder={'******************'}
              icon={
                <ClearIcon
                  size={16}
                  color="#A1ABBD"
                  style={{ cursor: 'pointer' }}
                  onClick={clearEncryptedPasswordHandler}
                />
              }
              value={encryptedPassword}
              onChange={changeEncryptedPasswordHandler}
            />
          </YStack>
          <YStack space={'$2'}>
            <Text size={15} color={'#647084'}>
              Confirm Encryption Password
            </Text>
            <Input
              placeholder={'******************'}
              icon={
                <ClearIcon
                  size={16}
                  color="#A1ABBD"
                  style={{ cursor: 'pointer' }}
                  onClick={clearConfirmEncryptedPasswordHandler}
                />
              }
              value={confirmEncryptedPassword}
              onChange={changeConfirmEncryptedPasswordHandler}
            />
          </YStack>
        </YStack>
        <BorderBox>
          <Text size={15} weight={'semibold'}>
            Download Key Files
          </Text>
        </BorderBox>
      </XStack>
      <Button onPress={generateKeyFilesHandler}>Generate Key files</Button>
    </YStack>
  )
}

export default PasswordFields
