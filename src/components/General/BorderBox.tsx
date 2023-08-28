import { Stack } from 'tamagui'

type BorderBoxProps = {
  children: React.ReactNode
}

const BorderBox = ({ children }: BorderBoxProps) => {
  return (
    <Stack style={{ border: '1px solid #DCE0E5', borderRadius: '0.5rem', padding: '6px 12px' }}>
      {children}
    </Stack>
  )
}

export default BorderBox
