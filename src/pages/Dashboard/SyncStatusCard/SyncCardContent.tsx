import { Separator, Stack, XStack, YStack } from 'tamagui'
import { Shadow, Text } from '@status-im/components'
import { SwapIcon } from '@status-im/icons'
import { CSSProperties } from 'react'

import { formatNumberWithComa } from '../../../utilities'
import IconText from '../../../components/General/IconText'

type SyncCardContentProps = {
  title: string
  value: number
  total: number
  isTop?: boolean
}

const SyncCardContent = ({ title, value, total, isTop }: SyncCardContentProps) => {
  const style: CSSProperties = {}

  if (isTop === true) {
    style.borderTopLeftRadius = '16px'
    style.borderTopRightRadius = '16px'
  } else if (isTop === false) {
    style.borderBottomLeftRadius = '16px'
    style.borderBottomRightRadius = '16px'
  }

  return (
    <Shadow variant="$1" style={style}>
      <YStack>
        <Stack style={{ minHeight: '90px', padding: '12px 16px' }}>
          <Text size={15} weight={'semibold'} color="#647084">
            {title}
          </Text>
        </Stack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack space={'$3'} style={{ padding: '12px 16px' }}>
          <IconText icon={<SwapIcon size={16} />}>Syncing</IconText>
          <Text size={13} weight={'semibold'}>
            {formatNumberWithComa(value)} / {formatNumberWithComa(total)}
          </Text>
        </XStack>
      </YStack>
    </Shadow>
  )
}

export default SyncCardContent
