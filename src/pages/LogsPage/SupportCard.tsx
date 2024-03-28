import { Text } from '@status-im/components'
import { YStack } from 'tamagui'
import IconText from '../../components/General/IconText'

import DashboardCardWrapper from '../Dashboard/DashboardCardWrapper'
import { ProfileIcon } from '@status-im/icons'

const SupportCard = () => {
  return (
    <DashboardCardWrapper>
      <YStack
        style={{
          borderRadius: '16px',
          border: 'none',
          backgroundColor: '#fff',
          minWidth: '280px',
        }}
      >
        <Text size={19} weight={'semibold'}>
          Nimbus Support
        </Text>
        <IconText
          children={'Join Community'}
          icon={<ProfileIcon size={20} />}
          weight={'semibold'}
        ></IconText>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default SupportCard
