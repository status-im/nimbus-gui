import { Text } from '@status-im/components'
import { Separator, Stack, XStack, YStack } from 'tamagui'

import DashboardCardWrapper from '../DashboardCardWrapper'
import Icon from '../../../components/General/Icon'

type ActiveValidatorsProps = {
  count: number
}

const ActiveValidators = ({ count }: ActiveValidatorsProps) => {
  return (
    <DashboardCardWrapper
      style={{ padding: 0, height: '156px', minWidth: '250px' }}
    >
      <img
        src="/images/validators-count.png"
        alt=""
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100px',
          height: '100px',
        }}
      />

      <YStack height="100%">
        <Stack
          style={{ minHeight: '90px', padding: '12px 16px', flex: 1 }}
          justifyContent="space-between"
        >
          <Text size={19} weight={'semibold'}>
            Active Validators
          </Text>

          <Text size={27} weight={'semibold'}>
            {count}
          </Text>
        </Stack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack style={{ padding: '12px 16px' }} justifyContent="space-between">
          <Text size={13} weight={'semibold'} color="#09101C">
            Manage Validator
          </Text>
          <Icon src="/icons/spark-outlined.png" height={20} width={20}></Icon>
        </XStack>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default ActiveValidators
