import StandartLineChart from './StandardLineChart'
import IconText from '../General/IconText'
import { Separator, XStack, YStack } from 'tamagui'
import { Shadow as ShadowBox, Text } from '@status-im/components'
import { CheckCircleIcon, IncorrectIcon } from '@status-im/icons'

type DataPoint = {
  x: number
  y: number
}

type ChartData = {
  id: string
  color: string
  data: DataPoint[]
}

type DeviceNetworkHealthProps = {
  uploadRate: number[]
  downloadRate: number[]
}
const DeviceNetworkHealth = ({ uploadRate, downloadRate }: DeviceNetworkHealthProps) => {
  const THRESHOLD = 60;
  const GOOD_COLOR = '#8DC6BC';
  const POOR_COLOR_UPLOAD = '#e95460';
  const POOR_COLOR_DOWNLOAD = '#D92344';

  const processDataRate = (rate: number[], id: string, poorColor: string) => {
    const dataObj = rate.map((yValue, index: number) => ({ x: index + 1, y: yValue }));
    const currentLoad = dataObj.length > 0 ? dataObj[dataObj.length - 1].y : 0;
    const message = currentLoad > THRESHOLD ? 'Good' : 'Poor';
    const color = message === 'Good' ? GOOD_COLOR : poorColor;

    return {
      id,
      color,
      data: dataObj,
      currentLoad,
      message,
    };
  };

  const upload = processDataRate(uploadRate, 'uploadRate', POOR_COLOR_UPLOAD);
  const download = processDataRate(downloadRate, 'downloadRate', POOR_COLOR_DOWNLOAD);

  const chartData: ChartData[] = [upload, download];

  return (
    <ShadowBox
      variant="$2"
      style={{
        width: '50%',
        minHeight: '135px',
        borderRadius: '16px',
        border: upload.message === 'Poor' ? '1px solid  #D92344' : 'none',
        backgroundColor:  upload.message === 'Poor' ? '#fefafa' : '#fff',
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
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <StandartLineChart data={chartData} />
          </div>
          <YStack space={'$3'}>
            <Text size={15} weight={'semibold'}>
              Network
            </Text>
            <Text size={27} weight={'semibold'}>
              {upload.currentLoad} GB
            </Text>
          </YStack>
        </XStack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack space={'$4'} style={{ padding: '0.65rem 1rem' }}>
          <IconText
            icon={ upload.message === 'Good' ? <CheckCircleIcon size={16} /> : <IncorrectIcon size={16} />}
            weight={'semibold'}
          >
            { upload.message}
          </IconText>
          { upload.message === 'Poor' && (
            <Text size={13} color={'#E95460'} weight={'semibold'}>
              {((upload.currentLoad / 60) * 100).toFixed(0)}% Utilization
            </Text>
          )}
        </XStack>
      </YStack>
    </ShadowBox>
  )
}

export default DeviceNetworkHealth
