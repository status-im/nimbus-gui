import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

type KeystoreBackupsCardProps = {
  isSelected?: boolean
}

const KeystoreBackupsCard = ({ isSelected }: KeystoreBackupsCardProps) => {
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
        backgroundColor: isSelected ? '#f4f6fe' : '#fff',
        border: `1px solid ${isSelected ? '#2A4AF566' : '#DCE0E5'}`,
        borderRadius: '16px',
        padding: '9px 16px',
        cursor: 'pointer',
        width: '100%',
      }}
      onPress={downloadKeyFilesHandler}
    >
      <Text size={15} weight={'semibold'}>
        Download Keystore Backups
      </Text>
      <XStack
        style={{
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <XStack style={{ maxWidth: '250px', width: '60%' }}>
          <Text size={13} color="#647084">
            Your keystore files are loaded automatically, please secure your
            keystore backups for recovery.
          </Text>
        </XStack>
        <img
          src={'/icons/download-keystore-backups-icon.svg'}
          alt="download-keystore-backups"
        />
      </XStack>
    </YStack>
  )
}

export default KeystoreBackupsCard
