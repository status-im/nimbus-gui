import { Shadow } from '@status-im/components'

type DashboardCardWrapperProps = {
  children: React.ReactNode
  padding?: string
}

const DashboardCardWrapper = ({ children, padding = '12px 16px' }: DashboardCardWrapperProps) => {
  return (
    <Shadow variant="$1" style={{ borderRadius: '16px', padding, backgroundColor: '$background' }}>
      {children}
    </Shadow>
  )
}

export default DashboardCardWrapper
