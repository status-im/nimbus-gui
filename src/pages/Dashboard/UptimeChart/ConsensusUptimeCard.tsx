import { Shadow, Text } from '@status-im/components';
import { Stack, XStack, YStack } from 'tamagui';
import UptimeChart from './UptimeChart';

const ConsensusUptimeCard = () => {
    return (
        <Shadow
            variant="$2"
            style={{
                borderRadius: '16px',
            }}
        >
            <YStack space={'$3'} width={'260px'} height={'156px'}>
                <Text size={15} weight={'semibold'}>Consensus Uptime </Text>
                <XStack space={'$2'}>
                    <Text size={27} weight={'semibold'}>98%</Text>
                    <Text size={13} color='$red'>-2%</Text>
                </XStack>
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