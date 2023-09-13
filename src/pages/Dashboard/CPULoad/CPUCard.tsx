import StandartLineChart from '../../../components/Charts/StandardLineChart'
import IconText from '../../../components/General/IconText'
import { Paragraph, Separator, XStack, YStack } from 'tamagui'
import { Shadow, Text } from '@status-im/components'
import { IncorrectIcon } from '@status-im/icons'
import Icon from '../../../components/General/Icon'

type DataPoint = {
    x: number
    y: number
}

type ChartData = {
    id: string
    color: string
    data: DataPoint[]
}

type CPUCardProps = {
    load: number[]
}
const CPUCard = ({ load }: CPUCardProps) => {
    const chartData: ChartData[] = [
        {
            id: 'cpu',
            color: '#8DC6BC',
            data: load.map((yValue, index: number) => ({
                x: index + 1,
                y: yValue,
            })),
        },
    ]
    const currentLoad =
        chartData[0].data.length > 0 ? chartData[0].data[chartData[0].data.length - 1].y : 0

    const message = currentLoad < 80 ? 'Good' : 'Poor'

    return (
        <Shadow
            variant="$2"
            style={{
                width: '284px',
                height: '136px',
                borderRadius: '16px',
                border: message === 'Poor' ? '1px solid  #D92344' : 'none',
                backgroundColor: message === 'Poor' ? '#fefafa' : '#fff',
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
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                        <StandartLineChart data={chartData} />
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
                    <IconText
                        icon={message === 'Good' ? <Icon src='icons/active.svg' width={16} /> : <IncorrectIcon size={16} />}
                        weight={'semibold'}
                    >
                        {message}
                    </IconText>
                    {message === 'Poor' && (
                        <Text size={13} color="#E95460">
                            {((currentLoad / 80) * 100).toFixed(0)}% Utilization
                        </Text>
                    )}
                </XStack>
            </YStack>
        </Shadow >
    )
}

export default CPUCard
