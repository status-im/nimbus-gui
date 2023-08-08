import { Paragraph } from 'tamagui'

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
        padding: '0px 8px',
        alignItems: 'center',
        borderRadius: '67px',
      }}
    >
      <Paragraph fontWeight={'500'} fontSize={'10px'}>
        {text}
      </Paragraph>
    </div>
  )
}

export default Tag
