import { Stack } from 'tamagui'

import ValidatorSettingCard from './ValidatorSettingCard'
import { CARD_TITLES } from '../../../../constants'

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
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      {CARD_TITLES.map(title => (
        <ValidatorSettingCard key={title} title={title} />
      ))}
    </Stack>
  )
}

export default ValidatorSettingsCards