import { Text } from '@status-im/components'
import { Link } from 'react-router-dom'
import { Stack, YStack } from 'tamagui'
type AdvisoriesContentProps = {
  title: string
  content: string[]
}
const AdvisoriesContent = ({ title, content }: AdvisoriesContentProps) => {
  return (
    <YStack space={'$1'} style={{ width: '70%' }}>
      <Stack style={{ marginBottom: '5%' }}>
        <Text size={27} weight={400}>
          {title}
        </Text>
      </Stack>
      <YStack space={'$4'}>
        {content.map(row => (
          <Text key={row} size={19}>
            {row}
          </Text>
        ))}
        <Text size={19}>
          <Link
            to={'https://github.com/ethereum/consensus-specs'}
            style={{ textDecorationLine: 'underline', color: '#484848' }}
          >
            The Ethereum consensus layer specification
          </Link>
        </Text>
        <Text size={19} weight={'semibold'}>
          <Link
            to={'https://github.com/ethereum/consensus-specs'}
            style={{ textDecorationLine: 'underline', color: '#2A4CF4', fontWeight: 'bold' }}
          >
            More on slashing risks
          </Link>
        </Text>
      </YStack>
    </YStack>
  )
}
export default AdvisoriesContent
