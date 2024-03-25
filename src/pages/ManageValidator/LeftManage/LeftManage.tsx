import { useState } from 'react'
import { Stack } from 'tamagui'
import { InformationBox } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'

import Header from './Header'
import ValidatorDataCards from './ValidatorDataCards'
import ValidatorSettingsCards from './ValidatorSettingsCards'
import ValidatorGraffiti from './ValidatorGraffiti'
import ValidatorDataTabs from './ManageValidatorTable/ValidatorDataTabs'
import Footer from './Footer'
import ValidatorBlueSection from './ValidatorBlueSection'

const LeftManage = () => {
  const [isVisibleWarning, setIsVisibleWarning] = useState(true)

  return (
    <Stack
      width={'50%'}
      maxWidth="50%"
      flexGrow={1}
      space={'$2'}
      style={{ borderRight: '1px solid #DCE0E5' }}
    >
      <Header />
      <ValidatorBlueSection />
      <ValidatorDataCards />
      <ValidatorSettingsCards />
      <ValidatorGraffiti />
      <ValidatorDataTabs />
      {isVisibleWarning && (
        <InformationBox
          message="Your Validator balance is currently 0 ETH and requires a deposit."
          variant="error"
          icon={<CloseCircleIcon size={20} />}
          onClosePress={() => setIsVisibleWarning(false)}
        />
      )}
      <Footer />
    </Stack>
  )
}

export default LeftManage
