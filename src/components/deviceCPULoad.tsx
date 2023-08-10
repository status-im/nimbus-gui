import StandartLineChart from './StandardLineChart'
import ShadowBox from './ShadowBox'
import IconText from './IconText'
import { Paragraph, Separator, XStack, YStack } from 'tamagui'

const data = [
  {
    id: 'cpu',
    color: '#8DC6BC',
    data: [
      {
        x: '1',
        y: 15,
      },
      {
        x: '2',
        y: 12,
      },
      {
        x: '3',
        y: 43,
      },
      {
        x: '4',
        y: 20,
      },
      {
        x: '5',
        y: 60,
      },
      {
        x: '6',
        y: 5,
      },
      {
        x: '7',
        y: 15,
      },
      {
        x: '8',
        y: 12,
      },
      {
        x: '9',
        y: 43,
      },
      {
        x: '10',
        y: 20,
      },
      {
        x: '11',
        y: 60,
      },
      {
        x: '12',
        y: 132,
      },
    ],
  },
]
const DeviceCPULoad = () => {
  const currentLoad = data[0].data[data[0].data.length - 1].y
  const message = currentLoad < 80 ? 'Good' : 'Poor'

  return (
    <ShadowBox boxStyle={{ width: '284px', height: '136px' }}>
      <YStack>
        <XStack
          justifyContent="space-between"
          style={{
            padding: '8px 16px',
            position: 'relative', // Make XStack a positioning context
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <StandartLineChart data={data} />
          </div>
          <YStack space={'$3'}>
            <Paragraph color={'#09101C'} size={'$6'} fontWeight={'600'}>
              CPU
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

export default DeviceCPULoad
