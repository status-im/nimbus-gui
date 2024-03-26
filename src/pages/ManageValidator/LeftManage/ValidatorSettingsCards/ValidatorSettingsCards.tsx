import { Stack } from 'tamagui'

import ValidatorSettingCard from './ValidatorSettingCard'
import { VALIDATOR_SETTINGS_CARDS_TITLES } from '../../../../constants'

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
        paddingBottom: '15px',
      }}
    >
      {VALIDATOR_SETTINGS_CARDS_TITLES.map(title => (
        <ValidatorSettingCard key={title} title={title} />
      ))}
    </Stack>
  )
}

export default ValidatorSettingsCards
