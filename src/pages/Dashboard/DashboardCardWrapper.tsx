import { Shadow } from '@status-im/components'

type DashboardCardWrapperProps = {
  children: string
  padding?: string
  width: string
}

const DashboardCardWrapper = ({
  children,
  padding = '12px 16px',
  width,
}: DashboardCardWrapperProps) => {
  return (
    <Shadow
      variant="$1"
      style={{
        flexGrow: '1',
        width: width,
        borderRadius: '16px',
        padding,
        backgroundColor: '$background',
      }}
    >
      {children}
    </Shadow>
  )
}

export default DashboardCardWrapper
