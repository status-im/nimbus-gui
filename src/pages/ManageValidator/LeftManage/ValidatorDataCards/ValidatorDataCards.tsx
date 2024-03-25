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
      <ValidatorPeersCard title="Peers" value="67" />
      <ValidatorDataCard title="Slots Behind" value={19} iconPath="ghost.png" />
      <ValidatorDataCard
        title="Blocks"
        value={1452}
        iconPath="rubiks-cube.png"
        isFractionResult={true}
        fractionValue={987}
      />
      <ValidatorDataCard
        title="Attestations"
        value={2199}
        iconPath="pacman.png"
        fractionValue={1023}
        isFractionResult={true}
      />
      <ValidatorDataCard title="Syncs" value={1} iconPath="toaster.png" />
    </Stack>
  )
}

export default ValidatorDataCards
