import { Stack } from 'tamagui'

import BasicInfoCard from './BasicInfoCard'

const BasicInfoCards = () => {
  return (
    <Stack
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '14px',
        width: '100%',
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
