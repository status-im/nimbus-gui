import { Text, XStack } from 'tamagui'

type TagProps = {
  bc?: string
  text: string
}

const Tag = ({ bc = '#2A4AF5', text }: TagProps) => {
  return (
    <XStack
      style={{
        backgroundColor: bc,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1px 6px',
        borderRadius: '67px',
      }}
    >
      <Text fontWeight={'450'} fontSize={'10px'} color={'white'}>
        {text}
      </Text>
    </XStack>
  )
}

export default Tag
