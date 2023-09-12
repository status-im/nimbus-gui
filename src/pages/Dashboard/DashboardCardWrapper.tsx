import { Stack } from 'tamagui'

type DashboardCardWrapperProps = {
  children: React.ReactNode
}

const DashboardCardWrapper = ({ children }: DashboardCardWrapperProps) => {
  return (
    <Stack
      style={{
        borderRadius: '16px',
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </Stack>
  )
}

export default DashboardCardWrapper
