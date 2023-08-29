import { Stack, XStack, YStack } from 'tamagui'
import { Button, InformationBox, Input, Text } from '@status-im/components'
import { ClearIcon, CloseCircleIcon } from '@status-im/icons'
import { useState } from 'react'

const KeyFiles = () => {
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
    <YStack space={'$4'}>
      <XStack space={'$2'} style={{ justifyContent: 'space-between', width: '100%' }}>
        <YStack space={'$4'} style={{ width: '66%' }}>
          <YStack space={'$4'}>
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
        <YStack
          style={{
            border: '1px solid #DCE0E5',
            borderRadius: '16px',
            padding: '12px 16px',
            width: '32%',
            marginTop: '3.4%',
          }}
        >
          <Text size={15} weight={'semibold'}>
            Download Key Files
          </Text>
        </YStack>
      </XStack>
      <Stack style={{ width: 'fit-content' }}>
        <Button onPress={generateKeyFilesHandler}>Generate Key files</Button>
      </Stack>
      <InformationBox
        message="You should see that you have one keystore per validator. This keystore contains your signing key, encrypted with your password. Warning: Do not store keys on multiple (backup) validator clients at once"
        variant="error"
        icon={<CloseCircleIcon size={20} />}
      />
    </YStack>
  )
}

export default KeyFiles
