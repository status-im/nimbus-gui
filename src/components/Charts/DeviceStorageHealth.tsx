import IconText from '../General/IconText'
import { Separator, XStack, YStack } from 'tamagui'
import StandardGauge from './StandardGauge'
import { Shadow, Text } from '@status-im/components'
import { CheckCircleIcon, IncorrectIcon } from '@status-im/icons'
interface DeviceStorageHealthProps {
  storage: number
  maxStorage: number
}
const DeviceStorageHealth: React.FC<DeviceStorageHealthProps> = ({ storage, maxStorage }) => {
  const message = storage < maxStorage ? 'Good' : 'Poor'
  const free = maxStorage - storage
  const utilization = (storage / (maxStorage || 1)) * 100

  const data = (free: number) => {
    return [
      {
        id: 'storage',
        label: 'Used',
        value: storage,
        color: '#E95460',
      },
      {
        id: 'storage',
        label: 'Free',
        value: free,
        color: '#E7EAEE',
      },
    ]
  }

  return (
    <Shadow
      variant="$2"
      style={{
        width: '50%',
        minHeight: '135px',
        borderRadius: '16px',
        border: message === 'Poor' ? '1px solid  #D92344' : 'none',
        backgroundColor: message === 'Poor' ? '#fefafa' : '#fff',
      }}
    >
      <YStack>
        <XStack
          justifyContent="space-between"
          style={{
            padding: '0.75rem 1rem',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: '33px',
              width: '4.75rem',
              height: '4.75rem',
            }}
          >
            <StandardGauge data={data(free)} />
          </div>
          <YStack space={'$3'}>
            <Text size={15} weight={'semibold'}>
              Storage
            </Text>
            <Text size={27} weight={'semibold'}>
              {storage} GB
            </Text>
          </YStack>
        </XStack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack space={'$4'} style={{ padding: '0.65rem 1rem' }}>
          <IconText
            icon={message === 'Good' ? <CheckCircleIcon size={16} /> : <IncorrectIcon size={16} />}
            weight={'semibold'}
          >
            {message}
          </IconText>
          {message === 'Poor' && (
            <Text size={13} color={'#E95460'} weight={'semibold'}>
              {utilization.toFixed(0)}% Utilization
            </Text>
          )}
        </XStack>
      </YStack>
    </Shadow>
  )
}

export default DeviceStorageHealth
