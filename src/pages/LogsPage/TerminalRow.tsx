import { Text } from '@status-im/components'
import { Stack, XStack } from 'tamagui'
type DataType = {
  option: string
  description: string
}
interface RowProps {
  data: DataType | undefined
  index: number
}

const TerminalRow = ({ data, index }: RowProps) => {
  if (!data) {
    return <Text size={19}>Loading...</Text>
  }

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
      <Stack>
        {new Date(Date.now()).getHours()}h:{new Date(Date.now()).getMinutes()}m:
        {new Date(Date.now()).getSeconds()}s
      </Stack>
      <Stack
        style={{
          alignContent: 'flex-start',
          marginRight: '20px',
          marginLeft: '20px',
          wordWrap: 'break-word',
          maxWidth: '80%',
          height: '100%',
        }}
      >
        {option} {description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        nobis, numquam non rerum illo eligendi quaerat neque mollitia temporibus quam placeat
        repellat asperiores veritatis officiis unde sed praesentium obcaecati nihil? Quasi, quae
        eveniet cupiditate mollitia est facilis ea vero, aperiam dolore dolor doloribus labore
     
         
      </Stack>
    </XStack>
  )
}

export default TerminalRow
