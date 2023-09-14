import { Stack, XStack, YStack } from "tamagui";
import DashboardCardWrapper from "../DashboardCardWrapper";
import { Text } from "@status-im/components";
import LineChart from "./LineChart";
import Icon from "../../../components/General/Icon";

import { Calendar } from '@status-im/components'
import { useState } from "react";

type DateRangeType = {
    start: Date | null;
    end: Date | null;
};
const BalanceChardCard = () => {
    const [isCalendarVisible, setIsCalendarVisible] = useState(false)
    const [dateRange, setDateRange] = useState<DateRangeType>({ start: null, end: null });
    const calendarStyle = { backgroundColor: 'white', width: 'fit-content' }

    const handleDayClick = (day: any) => {
        if (!dateRange.start) {
            setDateRange({ start: day, end: null });
        } else if (!dateRange.end) {
            setDateRange({ start: dateRange.start, end: day });
        } else {
            setDateRange({ start: day, end: null });
        }
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
                            <Text size={13} weight={'semibold'}>{dateRange.start ? dateRange.start.toLocaleDateString() + '  ->' : 'Start Date -> '}   </Text>
                            <Text size={13} weight={'semibold'}>{dateRange.end ? dateRange.end.toLocaleDateString() : ' End Date'}</Text>
                            <Icon src="/icons/edit.svg" />
                        </XStack>
                    </XStack>
                    {isCalendarVisible && <Calendar style={{ ...calendarStyle }} onDayClick={handleDayClick} />}
                    <LineChart />
                </YStack>
            </Stack>
        </DashboardCardWrapper>
    )
}
export default BalanceChardCard;
