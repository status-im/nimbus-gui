import { Text } from '@status-im/components'
import { Stack, XStack } from 'tamagui'
import { faker } from '@faker-js/faker'

type DataType = {
  option: string
  description: string
}
interface RowProps {
  data: DataType | undefined
  index: number
  timestamp: boolean
}
function cutSentenceToRandomWords(sentence: string) {
  const randomLength = Math.floor(Math.random() * 100) + 1
  let words = sentence.split(' ')
  let slicedWords = words.slice(0, randomLength)
  return slicedWords.join(' ')
}

const TerminalRow = ({ data, index, timestamp }: RowProps) => {
  if (!data) {
    return <Text size={19}>Loading...</Text>
  }

  const randomName = faker.person.firstName()

  const { option, description } = data

  return (
    <XStack style={{ fontFamily: 'monospace' }}>
      <Stack
        style={{
          alignContent: 'flex-start',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '20px',
          width: '30px',
          backgroundColor: '#f5f6f8',
          color: '#A1ABBD',
        }}
      >
        {index}
      </Stack>
      {timestamp && (
        <Stack>
          {new Date(Date.now()).getHours()}:{new Date(Date.now()).getMinutes()}:
          {new Date(Date.now()).getSeconds()}
        </Stack>
      )}
      <Stack
        style={{
          alignContent: 'flex-start',
          marginRight: '20px',
          marginLeft: '20px',
          wordWrap: 'break-word',
          maxWidth: '89%',
          height: '100%',
        }}
      >
        {option} {description} -- {randomName}{' '}
        {cutSentenceToRandomWords(`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        nobis, numquam non rerum illo eligendi quaerat neque mollitia temporibus quam placeat
        repellat asperiores veritatis officiis unde sed praesentium obcaecati nihil? Quasi, quae
        eveniet cupiditate mollitia est facilis ea vero, aperiam dolore dolor doloribus labore`)}
      </Stack>
    </XStack>
  )
}

export default TerminalRow
