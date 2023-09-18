import { Calendar, Shadow, Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'
import { DateRange } from 'react-day-picker'
import { useState } from 'react'

import UptimeChart from '../UptimeChart/UptimeChart'
import Icon from '../../../components/General/Icon'
import { getMonthIndicesFromRange } from '../../../utilities'

const data: DataItem[] = [
  {
    name: 'Jan',
    pv: 0,
    pa: 0,
  },
  {
    name: 'Feb',
    pv: 0,
    pa: 0,
  },
  {
    name: 'Mar',
    pv: 0,
    pa: 0,
  },
  {
    name: 'Apr',
    pv: 0,
    pa: 0,
  },
  {
    name: 'May',
    pv: 0,
    pa: 0,
  },
  {
    name: 'Aug',
    pv: 0,
    pa: 0,
  },
  {
    name: 'Jun',
    pv: 0,
    pa: 0,
  },
  {
    name: 'Jul',
    pv: 1,
    pa: 0,
  },
  {
    name: 'Sep',
    pv: 0,
    pa: 0,
  },
  {
    name: 'Oct',
    pv: 0,
    pa: 0,
  },
  {
    name: 'Nov',
    pv: 1,
    pa: 1,
  },
  {
    name: 'Dec',
    pv: 1,
    pa: 1,
  },
]

type DataItem {
  name?: string
  pa: number
  pv: number
}

const DeviceUptime = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined })
  const [startMonth, endMonth] = getMonthIndicesFromRange(dateRange)
  const filteredMonths = data.slice(startMonth, endMonth + 1)

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
    <Shadow
      variant="$2"
      style={{
        borderRadius: '16px',
      }}
    >
      <YStack space={'$3'} width={'560px'} height={'156px'} padding={'$3'}>
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
              width: '504px',
              height: '100%',
            }}
          >
            <UptimeChart data={filteredMonths} />
          </Stack>
        </XStack>
      </YStack>
    </Shadow>
  )
}

export default DeviceUptime
