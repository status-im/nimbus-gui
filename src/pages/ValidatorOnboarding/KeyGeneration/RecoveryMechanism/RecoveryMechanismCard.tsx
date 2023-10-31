import { Text } from '@status-im/components'
import { useDispatch } from 'react-redux'

import { setRecoveryMechanism } from '../../../../redux/ValidatorOnboarding/KeyGeneration/slice'

type RecoveryMechanismProps = {
  value: string
  recoveryMechanism: string
  icon: string
}

const RecoveryMechanismCard = ({ value, recoveryMechanism, icon }: RecoveryMechanismProps) => {
  const dispatch = useDispatch()

  const handleRecMechanismChange = () => {
    dispatch(setRecoveryMechanism(value))
  }

  return (
    <div
      style={{
        border: `1px solid ${recoveryMechanism === value ? '#2A4AF566' : '#DCE0E5'}`,
        borderRadius: '16px',
        padding: '12px 16px',
        cursor: 'pointer',
        backgroundColor: recoveryMechanism === value ? '#f4f6fe' : '#fff',
        width: '100%',
        height: '120px',
      }}
      onClick={handleRecMechanismChange}
    >
      <Text size={15} weight={'semibold'}>
        {value}
      </Text>
      {icon && (
        <div style={{ display: 'flex', justifyContent: 'end', marginTop: '8px' }}>
          <img src={`/icons/${icon}`} alt="logo" />
        </div>
      )}
    </div>
  )
}

export default RecoveryMechanismCard
