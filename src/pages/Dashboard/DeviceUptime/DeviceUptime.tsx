import { Shadow, Text } from '@status-im/components';
import { Stack, XStack, YStack } from 'tamagui';
import UptimeChart from '../UptimeChart/UptimeChart';
import Icon from '../../../components/General/Icon';

const data: DataItem[] = [

    {
        name: 'Jan',
        pv: 0,
        pa: 0
    },
    {
        name: 'Feb',
        pv: 0,
        pa: 0
    },
    {
        name: 'Mar',
        pv: 0,
        pa: 0
    },
    {
        name: 'Apr',
        pv: 0,
        pa: 0
    },
    {
        name: 'May',
        pv: 0,
        pa: 0
    },
    {
        name: 'Aug',
        pv: 0,
        pa: 0
    },
    {
        name: 'Jun',
        pv: 0,
        pa: 0
    },
    {
        name: 'Jul',
        pv: 1,
        pa: 0
    },
    {
        name: 'Sep',
        pv: 0,
        pa: 0
    },
    {
        name: 'Oct',
        pv: 0,
        pa: 0
    },
    {
        name: 'Nov',
        pv: 1,
        pa: 1
    },
    {
        name: 'Dec',
        pv: 1,
        pa: 1
    },
];
interface DataItem {
    name?: string;
    pa: number;
    pv: number;
}
const DeviceUptime = () => {
    return (
        <Shadow
            variant="$2"
            style={{
                borderRadius: '16px',
            }}
        >
            <YStack space={'$3'} width={'560px'} height={'156px'} padding={'$3'}>
                <YStack>
                    <Text size={15} weight={'semibold'}> Device Uptime</Text>
                    <XStack style={{ alignItems: 'end', }} space={'$2'} >
                        <Text size={27} weight={'semibold'}>98%</Text>
                        <Icon src='/icons/positive.svg' width={13}></Icon>
                        <Text size={13} color="#E95460" >1.56%</Text>
                    </XStack>
                </YStack>
                <XStack height={'50%'} justifyContent="center" alignItems="center">
                    <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '504px', height: '100%' }}>
                        <UptimeChart data={data} />
                    </Stack>
                </XStack>
            </YStack>

        </Shadow >
    );
}
export default DeviceUptime;