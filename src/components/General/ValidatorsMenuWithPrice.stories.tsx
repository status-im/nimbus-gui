import { useState } from 'react'
import ValidatorsMenuWithPrice from './ValidatorsMenuWithPrice'
import { CLIENT_SETUP_SUBTITLE, DEPOSIT_SUBTITLE } from '../../constants'

export default {
  title: 'General/ValidatorsMenuWithPrice',
  component: ValidatorsMenuWithPrice,
  tags: ['autodocs'],
}

type WrapperComponentProps = {
  initialCount: number
  label: string
}

const WrapperComponent = ({ initialCount, label }: WrapperComponentProps) => {
  const [validatorCount, setValidatorCount] = useState(initialCount)

  const handleValidatorCountChange = (value: string) => {
    const numberValue = Number(value)
    if (!isNaN(numberValue)) {
      setValidatorCount(numberValue)
    }
  }

  return (
    <ValidatorsMenuWithPrice
      validatorCount={validatorCount}
      changeValidatorCountHandler={handleValidatorCountChange}
      label={label}
    />
  )
}

export const Default = () => <WrapperComponent initialCount={2} label={DEPOSIT_SUBTITLE} />

export const ClientSetupLabel = () => (
  <WrapperComponent initialCount={2} label={CLIENT_SETUP_SUBTITLE} />
)

export const WithLongValidatorCount = () => (
  <WrapperComponent initialCount={2000} label={DEPOSIT_SUBTITLE} />
)

export const WithoutValidatorCount = () => (
  <WrapperComponent initialCount={0} label={DEPOSIT_SUBTITLE} />
)

export const WithoutLabel = () => <WrapperComponent initialCount={2} label={''} />

export const WithoutValues = () => <WrapperComponent initialCount={0} label={''} />
