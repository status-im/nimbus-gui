import { Stack } from 'tamagui'
import ValidatorDataCard from './ValidatorDataCard'
import ValidatorPeersCard from './ValidatorPeersCard'

const ValidatorDataCards = () => {
  return (
    <Stack
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '1vw',
        width: '100%',
        padding: '0 30px',
      }}
    >
      <ValidatorPeersCard title="Peers" value="67"></ValidatorPeersCard>
      <ValidatorDataCard title="Blocks" value="1" />
      <ValidatorDataCard title="Attestations" value="1452" />
      <ValidatorDataCard title="Syncs" value="45" />
      <ValidatorDataCard title="Deposits" value="1" />
      <ValidatorDataCard title="Withdrawals" value="0" />
    </Stack>
  )
}

export default ValidatorDataCards
