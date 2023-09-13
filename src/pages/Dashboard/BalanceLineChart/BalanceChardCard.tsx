import { Stack, XStack, YStack } from "tamagui";
import DashboardCardWrapper from "../DashboardCardWrapper";
import { Text } from "@status-im/components";
import LineChart from "./LineChart";
import Icon from "../../../components/General/Icon";


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
                        <XStack style={{ border: '2px solid #09101C14', height: 'fit-content', padding: '3px', borderRadius: '10px' }}>
                            <Text size={13} weight={'semibold'}>01 APR 2022</Text>
                            <Text size={13} weight={'semibold'}> → 31 MAR 2023</Text>
                            <Icon src="/icons/edit.svg" ></Icon>
                        </XStack>
                    </XStack>
                    <LineChart />
                </YStack>
            </Stack>
        </DashboardCardWrapper>
    )
}
export default BalanceChardCard;
