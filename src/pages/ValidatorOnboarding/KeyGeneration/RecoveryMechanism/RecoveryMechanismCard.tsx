import { Text } from '@status-im/components'

type RecoveryMechanismProps = {
  value: string
  recoveryMechanism: string
  handleRecMechanismChange: (value: string) => void
}

const RecoveryMechanismCard = ({
  value,
  recoveryMechanism,
  handleRecMechanismChange,
}: RecoveryMechanismProps) => {
  return (
    <div
      style={{
        border: `1px solid ${recoveryMechanism === value ? '#2A4AF566' : '#DCE0E5'}`,
        borderRadius: '16px',
        padding: '12px 16px',
        cursor: 'pointer',
        backgroundColor: recoveryMechanism === value ? '#f4f6fe' : '#fff',
        width: '100%',
        height: '140px',
      }}
      onClick={() => handleRecMechanismChange(value)}
    >
      <Text size={15} weight={'semibold'}>
        {value}
      </Text>
    </div>
  )
}

export default RecoveryMechanismCard
