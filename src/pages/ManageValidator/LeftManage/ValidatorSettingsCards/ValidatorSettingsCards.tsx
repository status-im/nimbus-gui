import { Stack } from 'tamagui'
import { Link } from 'react-router-dom'

import AdvancedDropdownMenu from './AdvancedDropdownMenu'
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
      {VALIDATOR_SETTINGS_CARDS_TITLES.map(title =>
        title === VALIDATOR_SETTINGS_CARDS_TITLES[2] ? (
          <AdvancedDropdownMenu key={title} title={title} />
        ) : (
          <Link to={title.toLowerCase()} key={title}>
            <ValidatorSettingCard title={title} />
          </Link>
        ),
      )}
    </Stack>
  )
}

export default ValidatorSettingsCards
