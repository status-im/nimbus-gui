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
      <ValidatorDataCard title="Blocks" value="1" iconPath="ghost.png" />
      <ValidatorDataCard
        title="Attestations"
        value="1452"
        iconPath="rubiks-cube.png"
      />
      <ValidatorDataCard title="Syncs" value="45" iconPath="pacman.png" />
      <ValidatorDataCard title="Deposits" value="1" iconPath="toaster.png" />
    </Stack>
  )
}

export default ValidatorDataCards
