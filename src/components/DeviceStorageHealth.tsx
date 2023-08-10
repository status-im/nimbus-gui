import ShadowBox from './ShadowBox'
import IconText from './IconText'
import { Paragraph, Separator, XStack, YStack } from 'tamagui'
import StandardGauge from './StandardGauge'

const DeviceStorageHealth = () => {
  const currentLoad = 60
  const message = currentLoad < 80 ? 'Good' : 'Poor'
  const data = [
    {
      id: 'storage',
      label: 'Storage',
      value: 55,
      color: '#E95460',
    },
    {
      id: 'storage',
      label: 'Storage',
      value: 45,
      color: '#E7EAEE',
    },
  ]
  return (
    <ShadowBox boxStyle={{ width: '284px', height: '136px' }}>
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
            <StandardGauge data={data} />
          </div>
          <YStack space={'$3'}>
            <Paragraph color={'#09101C'} size={'$6'} fontWeight={'600'}>
              Storage
            </Paragraph>
            <Paragraph color={'#09101C'} size={'$8'} fontWeight={'700'}>
              {currentLoad} GB
            </Paragraph>
          </YStack>
        </XStack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack space={'$4'} style={{ padding: '10px 16px 10px 16px' }}>
          <IconText icon={message === 'Good' ? '/icons/check-circle.png' : '/icons/alert.png'}>
            {message}
          </IconText>
          {/* <Text color={'#E95460'}>This is additional text</Text>  */}
        </XStack>
      </YStack>
    </ShadowBox>
  )
}

export default DeviceStorageHealth
