import { Stack, XStack, YStack } from "tamagui";
import DashboardCardWrapper from "../DashboardCardWrapper";
import { Text } from "@status-im/components";
import LineChart from "./LineChart";


const BalanceChardCard = () => {
    return (
        <DashboardCardWrapper >
            <Stack style={{ width: '536px' }}>
                <YStack>

                    <XStack justifyContent={'space-between'}>
                        <YStack>
                            <Text size={15} weight={'semibold'}> Balance</Text>
                            <XStack style={{ alignItems: 'end' }} space={'$1'}>
                                <Text size={27} weight={'semibold'}>24,273</Text>
                                <Text size={11} color="#23ADA0" >1.56%</Text>
                            </XStack>
                        </YStack>
                        <XStack style={{ border: '1px solid black', height: 'fit-content', padding: '3px', borderRadius: '15px' }}>
                            <Text size={13}>01 APR 2022</Text>
                            <Text size={13}> → 31 MAR 2023</Text>
                        </XStack>
                    </XStack>
                    <LineChart />
                </YStack>
            </Stack>
        </DashboardCardWrapper>
    )
}
export default BalanceChardCard;
