import { Separator, Stack, XStack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { IncorrectIcon } from '@status-im/icons'

import StandardGauge from '../../../components/Charts/StandardGauge'
import IconText from '../../../components/General/IconText'
import Icon from '../../../components/General/Icon'
import DashboardCardWrapper from '../DashboardCardWrapper'

type StorageCardProps = {
  storage: number
  maxStorage: number
}

const StorageCard = ({ storage, maxStorage }: StorageCardProps) => {
  const message = storage < maxStorage ? 'Good' : 'Poor'
  const free = maxStorage - storage
  const utilization = (storage / (maxStorage || 1)) * 100

  const data = (free: number) => {
    return [
      {
        id: 'storage-used',
        label: 'Used',
        value: storage,
        color: '#E95460',
      },
      {
        id: 'storage-free',
        label: 'Free',
        value: free,
        color: '#E7EAEE',
      },
    ]
  }

  return (
    <DashboardCardWrapper padding="0" height="156px" minWidth="200px" >
      <YStack
        style={{
          borderRadius: '16px',
          border: message === 'Poor' ? '1px solid  #D92344' : 'none',
          backgroundColor: message === 'Poor' ? '#fefafa' : '#fff',
          flexGrow: '1',
        }}
      >
        <XStack
          justifyContent="space-between"
          style={{
            padding: '8px 16px',
            position: 'relative',
            flexGrow: '1',
          }}
        >
          <YStack space={'$3'} justifyContent="space-between">
            <Text size={15} weight={'semibold'}>
              Storage
            </Text>
            <Text size={27} weight={'semibold'}>
              {storage} GB
            </Text>
          </YStack>
          <Stack
            style={{
              position: 'absolute',
              top: '10%',
              right: '1px',
              width: '50%',
              height: '75%',
            }}
          >
            <StandardGauge data={data(free)} />
          </Stack>
        </XStack>
        <Separator borderColor={'#e3e3e3'} style={{ marginTop: 'auto' }} />
        <XStack space={'$4'} style={{ padding: '10px 16px' }}>
          <IconText
            icon={
              message === 'Good' ? (
                <Icon src="icons/active.svg" width={16} />
              ) : (
                <IncorrectIcon size={16} />
              )
            }
            weight={'semibold'}
          >
            {message}
          </IconText>
          {message === 'Poor' && (
            <Text size={13} color="#E95460">
              {utilization.toFixed(0)}% Utilization
            </Text>
          )}
        </XStack>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default StorageCard
