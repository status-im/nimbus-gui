import { XStack, YStack } from 'tamagui'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import Title from '../../components/General/Title'
import { NodeIcon } from '@status-im/icons'
import { Button as StatusButton, Text } from '@status-im/components'
import QuickStartBar from '../../components/General/QuickStartBar/QuickStartBar'
import { useNavigate } from 'react-router'
import FormStepper from './Stepper'

function ValidatorOnboarding() {
  const navigate = useNavigate()

  const getStartedHanlder = () => {
    navigate('/pair-device')
  }

  return (
    <>
      <PageWrapperShadow rightImageSrc="./background-images/landing-page-bg.png">
        <YStack className="landing-page">
          <YStack style={{ width: '100%', margin: '30vh 0 4vh' }}>
            <Text size={19} weight={'semibold'}>
              Create Nimbus Validator
            </Text>
            <Text size={15} weight="regular">
              Earn Rewards for securing the Ethereum Network
            </Text>
          </YStack>
          <FormStepper />

          <XStack>
            <StatusButton icon={<NodeIcon size={20} />} onPress={getStartedHanlder}>
              Get Started
            </StatusButton>
          </XStack>
        </YStack>
      </PageWrapperShadow>
      <QuickStartBar />
    </>
  )
}

export default ValidatorOnboarding
