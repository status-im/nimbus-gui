import { Stack, YStack } from 'tamagui'

import Header from './Header'
import ValidatorInfo from './ValidatorInfo'
import DepositStatus from './DepositStatus'
import ValidatorBalance from './ValidatorBalance'
import ValidatorDataCards from './ValidatorDataCards'
import ValidatorSettingsCards from './ValidatorSeettingsCards'
import ValidatorGraffiti from './ValidatorGraffiti'
import ValidatorDataTabs from './ManageValidatorTable/ValidatorDataTabs'
import Footer from './Footer'

const LeftManage = () => {
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
      <Footer />
    </Stack>
  )
}

export default LeftManage
