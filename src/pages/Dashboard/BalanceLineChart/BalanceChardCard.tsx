import './calendar.css'
import { Stack, XStack, YStack } from "tamagui";
import DashboardCardWrapper from "../DashboardCardWrapper";
import { Text } from "@status-im/components";
import LineChart from "./LineChart";
import Icon from "../../../components/General/Icon";
import { DateRange } from 'react-day-picker';
import { Calendar } from '@status-im/components'
import { useState } from "react";


const years = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC']
const userGains = [10000, 15000, 17500, 20000, 19000, 23222, 25000, 20000, 20000, 21000, 22300, 21000]

const getMonthIndicesFromRange = (range: DateRange) => {
    if (!range.from || !range.to) return [0, 11];

    return [range.from.getMonth(), range.to.getMonth()];
};
const BalanceChardCard = () => {
    const [isCalendarVisible, setIsCalendarVisible] = useState(false)
    const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined });
    const [startMonth, endMonth] = getMonthIndicesFromRange(dateRange);
    const filteredYears = years.slice(startMonth, endMonth + 1);
    const filteredUserGains = userGains.slice(startMonth, endMonth + 1);

    const handleRangeSelect = (
        range: DateRange | undefined,
        // @NOTE: You can take selectedDay: Date,
    ) => {
        if (!range) {
            setDateRange({ from: undefined, to: undefined });
            return;
        }
        setDateRange(range);
        if (range.from && range.to) {
            setIsCalendarVisible(false)
        }
    };

    return (
        <DashboardCardWrapper >
            <Stack style={{ width: '536px' }}>
                <YStack space={'$4'}>
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
                    </XStack>
                    {isCalendarVisible && (
                        <Calendar
                            style={{ backgroundColor: 'white', position: 'absolute', zIndex: 1000, top: '100%', right: '0' }}
                            mode="range"
                            selected={dateRange}
                            onSelect={handleRangeSelect}
                        />
                    )}
                    <LineChart years={filteredYears} userGains={filteredUserGains} />
                </YStack>
            </Stack>
        </DashboardCardWrapper>
    )
}
export default BalanceChardCard;
