import { Text } from '@status-im/components'

type RecoveryMechanismProps = {
  value: string
  selectedRecoveryMechanism: string
  handleRecoveryMechanismChange: (value: string) => void
}

const RecoveryMechanismCard = ({
  value,
  selectedRecoveryMechanism,
  handleRecoveryMechanismChange,
}: RecoveryMechanismProps) => {
  return (
    <div
      style={{
        border: `1px solid ${selectedRecoveryMechanism === value ? '#2A4AF566' : '#DCE0E5'}`,
        borderRadius: '0.5rem',
        padding: '6px 12px',
        cursor: 'pointer',
        backgroundColor: selectedRecoveryMechanism === value ? '#f4f6fe' : '#fff',
      }}
      onClick={() => handleRecoveryMechanismChange(value)}
    >
      <Text size={15} weight={'semibold'}>
        {value}
      </Text>
    </div>
  )
}

export default RecoveryMechanismCard
