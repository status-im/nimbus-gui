import { Stack } from 'tamagui'

import ValidatorSettingCard from './ValidatorSettingCard'
type IconKey = 'Exit Validator' | 'Migrate Validator' | 'Advanced'

const cardTitles: IconKey[] = [
  'Exit Validator',
  'Migrate Validator',

  'Advanced',
]
const ValidatorSettingsCards = () => {
  return (
    <Stack
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      {cardTitles.map(title => (
        <ValidatorSettingCard key={title} title={title} />
      ))}
    </Stack>
  )
}

export default ValidatorSettingsCards
