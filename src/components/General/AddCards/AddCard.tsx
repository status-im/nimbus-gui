import { Stack } from 'tamagui'
import { AddIcon } from '@status-im/icons'

const AddCard = () => {
  return (
    <Stack
      style={{
        border: '2px dashed #DCE0E5',
        borderRadius: '16px',
        cursor: 'pointer',
        minHeight: '150px',
        padding: '0 7vw',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
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
