import { Stack, YStack, useMedia } from 'tamagui'
import { Button, InformationBox, Input, Text } from '@status-im/components'
import { ClearIcon, CloseCircleIcon } from '@status-im/icons'
import { useState } from 'react'

import KeystoreBackupsCard from './KeystoreBackupsCard'
import ResponsiveStack from '../../../../components/General/ResponsiveStack'

const KeystoreFiles = () => {
  const [encryptedPassword, setEncryptedPassword] = useState('')
  const [confirmEncryptedPassword, setConfirmEncryptedPassword] = useState('')
  const [encryptedPasswordError, setEncryptedPasswordError] = useState(false)
  const [confirmEncryptedPasswordError, setConfirmEncryptedPasswordError] =
    useState(false)
  const [displayEncryptedPassword, setDisplayEncryptedPassword] = useState('')
  const [displayConfirmEncryptedPassword, setDisplayConfirmEncryptedPassword] =
    useState('')
  const media = useMedia()

  const generateKeystoreFilesHandler = () => {
    if (
      encryptedPassword !== confirmEncryptedPassword ||
      encryptedPassword === '' ||
      confirmEncryptedPassword === ''
    ) {
      setEncryptedPasswordError(true)
      return setConfirmEncryptedPasswordError(true)
    }

    setEncryptedPasswordError(false)
    setConfirmEncryptedPasswordError(false)
  }

  const changeEncryptedPasswordHandler = (e: any) => {
    const password = e.target.value
    setEncryptedPassword(password)
    setDisplayEncryptedPassword(getHidedPassword(password.length))
  }

  const changeConfirmEncryptedPasswordHandler = (e: any) => {
    const password = e.target.value
    setConfirmEncryptedPassword(password)
    setDisplayConfirmEncryptedPassword(getHidedPassword(password.length))
  }

  const getHidedPassword = (passwordLength: number) => {
    return '*'.repeat(passwordLength)
  }

  const clearEncryptedPasswordHandler = () => {
    setEncryptedPassword('')
    setDisplayEncryptedPassword('')
  }

  const clearConfirmEncryptedPasswordHandler = () => {
    setConfirmEncryptedPassword('')
    setDisplayConfirmEncryptedPassword('')
  }

  return (
    <YStack space={'$4'}>
      <ResponsiveStack
        isVerticalAligned={!!media.sm}
        space={'$2'}
        style={{ justifyContent: 'space-between', width: '100%' }}
      >
        <YStack
          space={'$4'}
          style={{ width: media.sm ? '100%' : '66%', justifyContent: 'end' }}
        >
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
              error={encryptedPasswordError}
              value={displayEncryptedPassword}
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
              error={confirmEncryptedPasswordError}
              value={displayConfirmEncryptedPassword}
              onChange={changeConfirmEncryptedPasswordHandler}
            />
          </YStack>
        </YStack>
        <div style={{ width: media.sm ? '100%' : '32%', paddingTop: '3.8%' }}>
          <KeystoreBackupsCard />
        </div>
      </ResponsiveStack>
      <Stack style={{ width: 'fit-content' }}>
        <Button onPress={generateKeystoreFilesHandler}>
          Generate Key files
        </Button>
      </Stack>
      <InformationBox
        message="You should see that you have one keystore per validator. This keystore contains your signing key, encrypted with your password. Warning: Do not store keys on multiple (backup) validator clients at once"
        variant="error"
        icon={<CloseCircleIcon size={20} />}
      />
    </YStack>
  )
}

export default KeystoreFiles
