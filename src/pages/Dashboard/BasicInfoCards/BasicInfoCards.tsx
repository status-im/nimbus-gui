import { Stack } from 'tamagui'

import BasicInfoCard from './BasicInfoCard'

const BasicInfoCards = () => {
  return (
    <Stack
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '1vw',

      }}
    >
      <BasicInfoCard title="Active Validators" value="6" />
      <BasicInfoCard title="Connected Peers" value="16" />
      <BasicInfoCard title="At Headslot" value="-6" />
      <BasicInfoCard title="Avg. Effectiveness" value="4" />
      <BasicInfoCard title="Participation Rate" value="6" />
    </Stack>
  )
}

export default BasicInfoCards
