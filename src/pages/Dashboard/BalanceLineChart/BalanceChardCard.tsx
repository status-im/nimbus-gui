import './calendar.css'
import { Stack, XStack, YStack } from "tamagui";
import DashboardCardWrapper from "../DashboardCardWrapper";
import { Text } from "@status-im/components";
import LineChart from "./LineChart";
import Icon from "../../../components/General/Icon";

import { Calendar } from '@status-im/components'
import { useState } from "react";

type DateRangeType = {
    from: Date | undefined;
    to: Date | undefined;
};

const BalanceChardCard = () => {
    const [isCalendarVisible, setIsCalendarVisible] = useState(false)
    const calendarStyle = { backgroundColor: 'white', width: 'fit-content' }
    const [dateRange, setDateRange] = useState<DateRangeType>({ from: undefined, to: undefined });


    const handleRangeSelect = (range: DateRangeType) => {
        if (!range) {
            setDateRange({ from: undefined, to: undefined })
        }
        setDateRange(range);
    };

    return (
        <DashboardCardWrapper >
            <Stack style={{ width: '536px' }}>
                <YStack>

                    <XStack justifyContent={'space-between'}>
                        <YStack>
                            <Text size={15} weight={'semibold'}> Balance</Text>
                            <XStack style={{ alignItems: 'end', }} space={'$1'} onClick={() => setIsCalendarVisible(true)}>
                                <Text size={27} weight={'semibold'}>24,273</Text>
                                <Text size={11} color="#23ADA0" >1.56%</Text>
                            </XStack>
                        </YStack>
                        <XStack onClick={() => setIsCalendarVisible((prev) => !prev)} style={{ border: '2px solid #09101C14', height: 'fit-content', padding: '3px', borderRadius: '10px' }}>
                            <Text size={13} weight={'semibold'}>{dateRange?.from ? dateRange.from.toLocaleDateString() + '  ->' : 'Start Date -> '}   </Text>
                            <Text size={13} weight={'semibold'}>{dateRange?.to ? dateRange.to.toLocaleDateString() : ' End Date'}</Text>
                            <Icon src="/icons/edit.svg" />
                        </XStack>
                        {isCalendarVisible && (
                            <Calendar
                                style={calendarStyle}
                                mode="range"
                                selected={dateRange}
                                onSelect={handleRangeSelect}
                            />
                        )}
                    </XStack>

                    <LineChart />
                </YStack>
            </Stack>
        </DashboardCardWrapper>
    )
}
export default BalanceChardCard;
