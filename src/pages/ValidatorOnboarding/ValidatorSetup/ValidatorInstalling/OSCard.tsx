import { Stack } from 'tamagui'
import { Text } from '@status-im/components'
import Icon from '../../../../components/General/Icon'

type OSCardProps = {
  name: string
  icon: string
}
const OSCard = ({ name, icon }: OSCardProps) => {
  return (
    <Stack >
      <Text size={19} weight={'semibold'}>
        {name}
      </Text>
      <Icon src={icon} width={90} height={110} />
    </Stack>
  )
}

export default OSCard
