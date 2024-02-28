import { Stack } from 'tamagui'
import ValidatorDataCard from './ValidatorDataCard'
import ValidatorPeersCard from './ValidatorPeersCard'
import ValidatorSettingCard from './ValidatorSettingCard'

const ValidatorSettingsCards = () => {
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
      <ValidatorSettingCard title="Exit Validator"/>
      <ValidatorSettingCard title="Migrate Validator" />
      <ValidatorSettingCard title="Top up Validator" />
      <ValidatorSettingCard title="Advanced" />
    </Stack>
  )
}

export default ValidatorSettingsCards
