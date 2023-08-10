import { Text } from 'tamagui'

type TagProps = {
  bc: string
  text: string
}

const Tag = ({ bc, text }: TagProps) => {
  return (
    <div
      style={{
        backgroundColor: bc,
        display: 'flex',
        padding: '2px 6px',
        alignItems: 'center',
        borderRadius: '67px',
      }}
    >
      <Text fontWeight={'500'} fontSize={'9px'} color={'white'}>
        {text}
      </Text>
    </div>
  )
}

export default Tag
