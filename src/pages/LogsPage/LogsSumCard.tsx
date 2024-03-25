import { Text } from '@status-im/components'
import { Separator, XStack, YStack } from 'tamagui'
import IconText from '../../components/General/IconText'
import Icon from '../../components/General/Icon'
import DashboardCardWrapper from '../Dashboard/DashboardCardWrapper'
import { LogsTypes } from '../../constants'

type LogsSumCardProps = {
  type: keyof typeof LogsTypes
  count: number
  icon: string
  iconText: string
  setDropdownMenuItem: (item: string) => void
}
const LogsSumCard = ({
  type,
  count,
  iconText,
  icon,
  setDropdownMenuItem,
}: LogsSumCardProps) => {
  //when working with real waku data => change this constants with first and last log timestamps.
  const startTimestamp = new Date('2024-02-15T13:07:26.934+02:00')
  const endTimestamp = new Date('2024-02-15T13:08:10.934+02:00')

  const durationMilliseconds = endTimestamp.getTime() - startTimestamp.getTime()
  const durationMinutes = durationMilliseconds / (1000 * 60)

  return (
    <DashboardCardWrapper>
      <XStack
        style={{
          borderRadius: '16px',
          border: 'none',
          backgroundColor: '#fff',
          justifyContent: 'space-between',
          minWidth: '280px',
        }}
        onPress={() => setDropdownMenuItem(type)}
      >
        <YStack>
          <Text size={27} weight={'semibold'}>
            {LogsTypes[type]}
          </Text>
          <IconText
            children={iconText}
            icon={<Icon src={icon} width={14} height={14} />}
            weight={'semibold'}
          ></IconText>
        </YStack>
        <XStack>
          <Separator borderColor={'#e3e3e3'} vertical={true} scale={1.5} />
          <YStack paddingLeft="1rem" paddingRight="1rem">
            <Text size={19} weight={'semibold'}>
              {(count / durationMinutes).toFixed(0)}
            </Text>
            <Text size={13}>p/m</Text>
          </YStack>
        </XStack>
      </XStack>
    </DashboardCardWrapper>
  )
}

export default LogsSumCard
