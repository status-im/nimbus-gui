import { Shadow, Text } from '@status-im/components';
import { Stack, XStack, YStack } from 'tamagui';
import UptimeChart from './UptimeChart';
import Icon from '../../../components/General/Icon';

const ConsensusUptimeCard = () => {
    return (
        <Shadow
            variant="$2"
            style={{
                borderRadius: '16px',
            }}
        >
            <YStack space={'$3'} width={'260px'} height={'156px'} padding={'$3'}>
                <YStack>
                    <Text size={15} weight={'semibold'}> Consensus Uptime</Text>
                    <XStack style={{ alignItems: 'end', }} space={'$2'} onClick={() => setIsCalendarVisible(true)}>
                        <Text size={27} weight={'semibold'}>98%</Text>
                        <Icon src='/icons/positive.svg' width={13}></Icon>
                        <Text size={13} color="#E95460" >1.56%</Text>
                    </XStack>
                </YStack>
                <XStack height={'50%'} justifyContent="center" alignItems="center">
                    <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '228px', height: '100%' }}>
                        <UptimeChart />
                    </Stack>
                </XStack>
            </YStack>

        </Shadow >
    );
}
export default ConsensusUptimeCard;