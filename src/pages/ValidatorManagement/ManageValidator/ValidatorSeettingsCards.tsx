import { Stack } from 'tamagui'

import ValidatorSettingCard from './ValidatorSettingCard'
type IconKey =
  | 'Exit Validator'
  | 'Migrate Validator'
  | 'Top up Validator'
  | 'Advanced'

const cardTitles: IconKey[] = [
  'Exit Validator',
  'Migrate Validator',
  'Top up Validator',
  'Advanced',
]
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
      {cardTitles.map(title => (
        <ValidatorSettingCard key={title} title={title} />
      ))}
    </Stack>
  )
}

export default ValidatorSettingsCards
