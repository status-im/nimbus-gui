import { Stack } from 'tamagui'
import { AddIcon } from '@status-im/icons'

const AddCard = () => {
  return (
    <Stack
      style={{
        border: '2px dashed #DCE0E5',
        borderRadius: '16px',
        cursor: 'pointer',
        height: '150px',
        width: '260px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <AddIcon
        size={12}
        color="white"
        style={{
          backgroundColor: '#2A4AF5',
          borderRadius: '50%',
          padding: '6px',
        }}
      />
    </Stack>
  )
}

export default AddCard
