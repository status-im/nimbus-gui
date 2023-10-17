import { useState } from 'react'
import { XStack, YStack } from 'tamagui'
import { Calendar } from '@status-im/components'
import { Text } from '@status-im/components'
import { DateRange } from 'react-day-picker'

import DashboardCardWrapper from '../DashboardCardWrapper'
import LineChart from './LineChart'
import Icon from '../../../components/General/Icon'
import { years } from '../../../constants'
import './calendar.css'
import { getMonthIndicesFromRange } from '../../../utilities'

const userGains = [
  10000, 15000, 17500, 20000, 19000, 23222, 25000, 20000, 20000, 21000, 22300, 21000,
]

const BalanceChartCard = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined })
  const [startMonth, endMonth] = getMonthIndicesFromRange(dateRange)
  const filteredYears = years.slice(startMonth, endMonth + 1)
  const filteredUserGains = userGains.slice(startMonth, endMonth + 1)

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
    <DashboardCardWrapper minWidth={'536px'} maxWidth={'950px'}>
      <YStack space={'$4'}>
        <XStack justifyContent={'space-between'}>
          <YStack>
            <Text size={15} weight={'semibold'}>
              Balance
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
          {isCalendarVisible && (
            <Calendar
              style={{
                backgroundColor: '#fff',
                position: 'absolute',
                zIndex: 9999,
                top: 30,
                left: 100,
              }}
              mode="range"
              selected={dateRange}
              onSelect={handleRangeSelect}
            />
          )}
          <XStack
            onClick={() => setIsCalendarVisible(prev => !prev)}
            style={{
              border: '2px solid #09101C14',
              height: 'fit-content',
              padding: '5px',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
            space={'$2'}
          >
            <Text size={13} weight={'semibold'}>
              {dateRange?.from ? dateRange.from.toLocaleDateString() : `Start Date`}
            </Text>
            <Text size={13} weight={'semibold'}>
              {'->'}
            </Text>
            <Text size={13} weight={'semibold'}>
              {dateRange?.to ? dateRange.to.toLocaleDateString() : 'End Date'}
            </Text>
            <Icon src="/icons/edit.svg" />
          </XStack>
        </XStack>


        <LineChart years={filteredYears} userGains={filteredUserGains} />

      </YStack>
    </DashboardCardWrapper>
  )
}

export default BalanceChartCard
