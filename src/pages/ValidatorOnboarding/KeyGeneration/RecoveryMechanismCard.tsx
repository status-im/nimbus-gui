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
        borderRadius: '16px',
        padding: '12px 16px',
        cursor: 'pointer',
        backgroundColor: selectedRecoveryMechanism === value ? '#f4f6fe' : '#fff',
        width: '100%',
        height: '140px',
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
