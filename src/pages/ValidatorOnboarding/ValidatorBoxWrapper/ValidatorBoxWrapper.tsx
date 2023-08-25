import { Shadow } from '@status-im/components'
import { ReactNode } from 'react'

type ValidatorBoxWrapperProps = {
  children: ReactNode
}

const ValidatorBoxWrapper = ({ children }: ValidatorBoxWrapperProps) => {
  return (
    <Shadow
      variant="$2"
      style={{
        borderRadius: '16px',
        border: 'none',
        flexDirection: 'row',
        backgroundColor: '#fff',
        zIndex: 999,
      }}
    >
      {children}
    </Shadow>
  )
}

export default ValidatorBoxWrapper
