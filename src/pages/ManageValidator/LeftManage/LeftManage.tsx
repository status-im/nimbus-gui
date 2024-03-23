import { useState } from 'react'
import { Stack, YStack } from 'tamagui'
import { InformationBox } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'

import Header from './Header'
import ValidatorInfo from './ValidatorInfo'
import DepositStatus from './DepositStatus'
import ValidatorBalance from './ValidatorBalance'
import ValidatorDataCards from './ValidatorDataCards'
import ValidatorSettingsCards from './ValidatorSettingsCards'
import ValidatorGraffiti from './ValidatorGraffiti'
import ValidatorDataTabs from './ManageValidatorTable/ValidatorDataTabs'
import Footer from './Footer'

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
      <YStack backgroundColor="#F4F6FE" space={'$3'}>
        <ValidatorInfo />
        <DepositStatus />
        <ValidatorBalance />
      </YStack>
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
