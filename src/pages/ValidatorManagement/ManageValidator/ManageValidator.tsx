import { XStack, YStack } from 'tamagui'

import { Stack } from 'tamagui'

import RightPanel from './RightPanel'
import ValidatorInfo from './ValidatorInfo'
import DepositStatus from './DepositStatus'
import Header from './Header'
import ValidatorBalance from './ValidatorBalance'
import ValidatorToolsCards from './ValidatorToolsCards'
import ValidatorDataCards from './ValidatorDataCards'
import ValidatorDataTabs from './ManageValidatorTable/ValidatorDataTabs'
import ValidatorGraffiti from './ValidatorGraffiti'
import Footer from './Footer'
import ValidatorSettingsCards from './ValidatorSeettingsCards'

const ManageValidator = () => {
  return (
    <XStack flexGrow={1}>
      <Stack width={'50%'} space="$2">
        <Header />
        <YStack backgroundColor="#F4F6FE" space={'$3'}>
          <ValidatorInfo />
          <DepositStatus />
          <ValidatorBalance />
        </YStack>
        <ValidatorToolsCards />
        <ValidatorDataCards />
        <ValidatorSettingsCards></ValidatorSettingsCards>
        <ValidatorGraffiti />
        <ValidatorDataTabs />
        <Footer />
      </Stack>
      <RightPanel></RightPanel>
    </XStack>
  )
}
export default ManageValidator
