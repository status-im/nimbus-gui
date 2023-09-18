import { Paragraph, Separator, XStack, YStack } from 'tamagui'
import { Shadow, Text } from '@status-im/components'
import { IncorrectIcon } from '@status-im/icons'

import StandardGauge from '../../../components/Charts/StandardGauge'
import IconText from '../../../components/General/IconText'
import Icon from '../../../components/General/Icon'

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
        id: 'storage',
        label: 'Used',
        value: storage,
        color: '#E95460',
      },
      {
        id: 'storage',
        label: 'Free',
        value: free,
        color: '#E7EAEE',
      },
    ]
  }

  return (
    <Shadow
      variant="$2"
      style={{
        width: '284px',
        height: '136px',
        borderRadius: '16px',
        border: message === 'Poor' ? '1px solid  #D92344' : 'none',
        backgroundColor: message === 'Poor' ? '#fefafa' : '#fff',
      }}
    >
      <YStack>
        <XStack
          justifyContent="space-between"
          style={{
            padding: '8px 16px',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: '44px',
              width: '75px',
              height: '75px',
            }}
          >
            <StandardGauge data={data(free)} />
          </div>
          <YStack space={'$3'}>
            <Paragraph color={'#09101C'} size={'$6'} fontWeight={'600'}>
              Storage
            </Paragraph>
            <Paragraph color={'#09101C'} size={'$8'} fontWeight={'700'}>
              {storage} GB
            </Paragraph>
          </YStack>
        </XStack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack space={'$4'} style={{ padding: '10px 16px 10px 16px' }}>
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
    </Shadow>
  )
}

export default StorageCard
