import { XStack, YStack } from 'tamagui'

import { Stack } from 'tamagui'

import RightManageSettings from './RightManageSettings/RightManageSettings'
import ValidatorInfo from './ValidatorInfo'
import DepositStatus from './DepositStatus'
import Header from './Header'
import ValidatorBalance from './ValidatorBalance'
import ValidatorDataCards from './ValidatorDataCards'
import ValidatorDataTabs from './ManageValidatorTable/ValidatorDataTabs'
import ValidatorGraffiti from './ValidatorGraffiti'
import Footer from './Footer'
import ValidatorSettingsCards from './ValidatorSeettingsCards'

const ManageValidator = () => {
  return (
    <XStack
      width={'min-content'}
      alignItems="flex-start"
      style={{
        flexGrow: 1,
      }}
    >
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
        <ValidatorSettingsCards></ValidatorSettingsCards>
        <ValidatorGraffiti />
        <ValidatorDataTabs />
        <Footer />
      </Stack>
      <RightManageSettings />
    </XStack>
  )
}

export default ManageValidator
