import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

const KeystoreBackupsCard = () => {
  const downloadKeyFilesHandler = () => {
    const element = document.createElement('a')
    const file = new Blob([''], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'keystore_files.txt'
    document.body.appendChild(element)
    element.click()
  }

  return (
    <YStack
      style={{
        border: '1px solid #DCE0E5',
        borderRadius: '16px',
        padding: '12px 16px',
        width: '32%',
        marginTop: '3.4%',
        cursor: 'pointer',
      }}
      onClick={downloadKeyFilesHandler}
    >
      <Text size={15} weight={'semibold'}>
        Download Keystore Backups
      </Text>
      <XStack
        style={{
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          marginTop: '8px',
        }}
      >
        <Text size={13} color="#647084">
          Your keystore files are loaded automatically, please secure your keystore backups for
          recovery.
        </Text>
        <img src={'/icons/download-keystore-backups-icon.svg'} alt="download-keystore-backups" />
      </XStack>
    </YStack>
  )
}

export default KeystoreBackupsCard
