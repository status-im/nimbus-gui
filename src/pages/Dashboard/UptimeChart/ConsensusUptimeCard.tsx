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
                <Stack width={'100%'} height={'50%'}>
                    <UptimeChart />
                </Stack>
            </YStack>

        </Shadow >
    );
}
export default ConsensusUptimeCard;