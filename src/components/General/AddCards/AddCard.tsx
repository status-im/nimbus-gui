import { Stack } from 'tamagui'
import { AddIcon } from '@status-im/icons'

type AddCardProps = {
  style?: React.CSSProperties
}

const AddCard = ({ style }: AddCardProps) => {
  return (
    <Stack
      style={{
        border: '2px dashed #DCE0E5',
        borderRadius: '16px',
        cursor: 'pointer',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        ...style,
      }}
    >
      <AddIcon
        size={16}
        color="white"
        style={{
          backgroundColor: '#2A4AF5',
          borderRadius: '50%',
          padding: '5px',
        }}
      />
    </Stack>
  )
}

export default AddCard
