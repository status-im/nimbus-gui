import { Calendar, Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'
import { DateRange } from 'react-day-picker'
import { useState } from 'react'

import Icon from '../../../components/General/Icon'
import UptimeChart from '../UptimeChart/UptimeChart'
import DashboardCardWrapper from '../DashboardCardWrapper'
import { getMonthIndicesFromRange } from '../../../utilities'

const DeviceUptime = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined })
  const [startMonth, endMonth] = getMonthIndicesFromRange(dateRange)

  const handleRangeSelect = (
    range: DateRange | undefined,
    // @NOTE: You can take selectedDay: Date,
  ) => {
    if (!range) {
      setDateRange({ from: undefined, to: undefined })
      return
    }
    setDateRange(range)
    if (range.from && range.to) {
      setIsCalendarVisible(false)
    }
  }

  return (
    <DashboardCardWrapper >
      <YStack space={'$3'}>
        <XStack justifyContent={'space-between'}>
          <YStack>
            <Text size={15} weight={'semibold'}>
              Device Uptime
            </Text>
            <XStack
              style={{ alignItems: 'end' }}
              space={'$1'}
              onClick={() => setIsCalendarVisible(true)}
            >
              <Text size={27} weight={'semibold'}>
                24,273
              </Text>
              <Text size={11} color="#23ADA0">
                1.56%
              </Text>
            </XStack>
          </YStack>
          <XStack
            onClick={() => setIsCalendarVisible(prev => !prev)}
            style={{
              border: '2px solid #09101C14',
              height: 'fit-content',
              padding: '3px',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            <Text size={13} weight={'semibold'}>
              {dateRange?.from ? dateRange.from.toLocaleDateString() + '  ->' : 'Start Date -> '}{' '}
            </Text>
            <Text size={13} weight={'semibold'}>
              {dateRange?.to ? dateRange.to.toLocaleDateString() : ' End Date'}
            </Text>
            <Icon src="/icons/edit.svg" />
          </XStack>
          {isCalendarVisible && (
            <Calendar
              style={{
                backgroundColor: 'white',
                position: 'absolute',
                zIndex: 1000,
                top: '100%',
                right: '0',
              }}
              mode="range"
              selected={dateRange}
              onSelect={handleRangeSelect}
            />
          )}
        </XStack>
        <XStack height={'50%'} justifyContent="center" alignItems="center">
          <Stack
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <UptimeChart
              startMonth={startMonth}
              endMonth={endMonth}
              monthlyActivity={[10, 1, 3, 4, 5, 1, 7, 1, 6, 3, 1, 9]}
              withLabels={true}
            />
          </Stack>
        </XStack>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default DeviceUptime
