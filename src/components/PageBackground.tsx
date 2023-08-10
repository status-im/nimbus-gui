import { ReactNode } from 'react'
import { Stack } from 'tamagui'

type PageBackgroundProps = {
  children: ReactNode
}

const PageBackground = ({ children }: PageBackgroundProps) => {
  return (
    <Stack
      style={{
        backgroundColor: 'white',
        width: '100vw',
        background: 'linear-gradient(180deg, rgba(245,242,254,1) 0%, rgba(255,255,255,1) 100%)',
        height: '100vh',
      }}
    >
      {children}
    </Stack>
  )
}

export default PageBackground
