import { Stack } from 'tamagui'

type BorderBoxProps = {
  children: React.ReactNode
  style?: React.CSSProperties
}

const BorderBox = ({ children, style }: BorderBoxProps) => {
  return (
    <Stack
      style={{ border: '1px solid #DCE0E5', borderRadius: '16px', padding: '6px 12px', ...style }}
    >
      {children}
    </Stack>
  )
}

export default BorderBox
