import { Button, Shadow } from '@status-im/components'
import { Stack } from 'tamagui'

const Activation = () => {
  return (
    <>
      <Shadow
        variant="$1"
        style={{
          borderRadius: '16px',
          border: 'none',
          backgroundColor: '#fff',
          padding: '16px 32px',
        }}
      ></Shadow>
      <Stack style={{ alignItems: 'end', width: '100%', marginTop: '16px' }}>
        <Button>Continue</Button>
      </Stack>
    </>
  )
}

export default Activation
