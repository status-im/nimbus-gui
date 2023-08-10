import { ReactNode } from 'react'
import { Stack } from 'tamagui'

type ShadowBoxProps = {
  boxStyle?: React.CSSProperties
  children: ReactNode
}

const ShadowBox = ({boxStyle, children }: ShadowBoxProps) => {
  return (
    <Stack
      style={{
        boxSizing: 'border-box',
        borderRadius: '16px',
        boxShadow: '0px 4px 20px 0px rgba(9, 16, 28, 0.08)',
        ...boxStyle
      }}
    >
      {children}
    </Stack>
  )
}

export default ShadowBox
