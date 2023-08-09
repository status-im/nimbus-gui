import { ReactNode } from 'react'
import { Stack } from 'tamagui'

type ShadowBoxProps = {
  children: ReactNode
}

const ShadowBox = ({ children }: ShadowBoxProps) => {
  return (
    <Stack
      style={{
        boxSizing: 'border-box',
        borderRadius: '16px',
        boxShadow: '0px 4px 20px 0px rgba(9, 16, 28, 0.08)',
        width: '100%',
      }}
    >
      {children}
    </Stack>
  )
}

export default ShadowBox
