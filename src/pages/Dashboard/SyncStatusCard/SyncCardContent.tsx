import { Separator, XStack, YStack } from 'tamagui'
import { formatNumberForGauge } from '../../../utilities'
import { Text } from '@status-im/components'

type SyncCardContentProps = {
  title: string
  value: number
  total: number
}

const SyncCardContent = ({ title, value, total }: SyncCardContentProps) => {
  return (
    <YStack>
      <Text size={15} weight={'semibold'}>
        {title}
      </Text>
      <Separator borderColor={'#e3e3e3'} />
      <XStack space={'$2'} style={{ padding: '10px 16px 10px 16px' }}>
        {/* <IconText icon={<TokenIcon size={16} />}>Syncing</IconText> */}
        <Text size={13}>
          {formatNumberForGauge(value)} / {formatNumberForGauge(total)}
        </Text>
      </XStack>
    </YStack>
  )
}

export default SyncCardContent
