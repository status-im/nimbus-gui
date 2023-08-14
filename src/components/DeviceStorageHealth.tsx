import IconText from './IconText'
import { Paragraph, Separator, XStack, YStack } from 'tamagui'
import StandardGauge from './StandardGauge'
import { Shadow } from '@status-im/components'
interface DeviceStorageHealthProps {
  storage: number
  maxStorage: number
}
const DeviceStorageHealth: React.FC<DeviceStorageHealthProps> = ({ storage, maxStorage }) => {
  const message = storage < maxStorage ? 'Good' : 'Poor'
  const data = (storage: number, maxStorage: number) => {
    const used = storage
    const free = maxStorage - storage

    return [
      {
        id: 'storage',
        label: 'Used',
        value: used,
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
        width: '284px',
        height: '136px',
        borderRadius: '16px',
        border: '1px solid  #D92344',
      }}
    >
      <YStack>
        <XStack
          justifyContent="space-between"
          style={{
            padding: '8px 16px',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: '44px',
              width: '75px',
              height: '75px',
            }}
          >
            <StandardGauge data={data(storage, maxStorage)} />
          </div>
          <YStack space={'$3'}>
            <Paragraph color={'#09101C'} size={'$6'} fontWeight={'600'}>
              Storage
            </Paragraph>
            <Paragraph color={'#09101C'} size={'$8'} fontWeight={'700'}>
              {storage} GB
            </Paragraph>
          </YStack>
        </XStack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack space={'$4'} style={{ padding: '10px 16px 10px 16px' }}>
          <IconText
            icon={message === 'Good' ? '/icons/check-circle.png' : '/icons/alert.png'}
            weight={'semibold'}
          >
            {message}
          </IconText>
          {/* <Text color={'#E95460'}>This is additional text</Text>  */}
        </XStack>
      </YStack>
    </Shadow>
  )
}

export default DeviceStorageHealth
