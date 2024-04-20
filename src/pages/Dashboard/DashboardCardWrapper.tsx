import { Shadow } from '@status-im/components'

type DashboardCardWrapperProps = {
  children: React.ReactNode
  isErrorBorder?: boolean
  style?: React.CSSProperties
}

const DashboardCardWrapper = ({
  children,
  isErrorBorder,
  style,
}: DashboardCardWrapperProps) => {
  return (
    <Shadow
      variant="$1"
      style={{
        flexGrow: '1',
        borderRadius: '16px',
        backgroundColor: '$background',
        border: isErrorBorder ? '1px solid  #D92344' : '1px solid #E7EAEE',
        padding: '12px 16px',
        height: 'auto',
        minWidth: '0',
        ...style,
      }}
    >
      {children}
    </Shadow>
  )
}
export default DashboardCardWrapper
