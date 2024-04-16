import { useState } from 'react'
import { YStack } from 'tamagui'
import { InformationBox } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'

import Header from './PageParts/Header'
import ValidatorDataCards from './ValidatorDataCards/ValidatorDataCards'
import ValidatorSettingsCards from './ValidatorSettingsCards/ValidatorSettingsCards'
import ValidatorGraffiti from './ValidatorGraffiti/ValidatorGraffiti'
import ValidatorDataTabs from './ManageValidatorTable/ValidatorDataTabs'
import ValidatorBlueSection from './ValidatorBlueSection/ValidatorBlueSection'
import Footer from './PageParts/Footer'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { MODAL_WIDTH } from '../../../constants'

const LeftManage = () => {
  const [isVisibleWarning, setIsVisibleWarning] = useState(true)
  const { width } = useWindowSize()
  const isModalWidth = width < MODAL_WIDTH

  return (
    <YStack
      width={isModalWidth ? '100%' : '50%'}
      maxWidth={isModalWidth ? '100%' : '50%'}
      flexGrow={1}
      space={'$3'}
      style={{ borderRight: '1px solid #DCE0E5' }}
    >
      <Header />
      <ValidatorBlueSection />
      <YStack space={'$3'} style={{ padding: '15px 15px 30px 30px' }}>
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
      </YStack>
    </YStack>
  )
}

export default LeftManage
