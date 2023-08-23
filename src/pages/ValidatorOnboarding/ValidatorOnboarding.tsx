import { XStack, YStack } from 'tamagui'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import Title from '../../components/General/Title'
import { NodeIcon } from '@status-im/icons'
import { Shadow, Button as StatusButton, Text } from '@status-im/components'
import QuickStartBar from '../../components/General/QuickStartBar/QuickStartBar'
import { useNavigate } from 'react-router'
import FormStepper from './Stepper'
import Titles from '../../components/General/Titles'

function ValidatorOnboarding() {
  const navigate = useNavigate()

  const getStartedHanlder = () => {
    navigate('/pair-device')
  }

  return (
    <>
      <PageWrapperShadow>
        <YStack>
          <YStack style={{ width: '100%', margin: '30vh 0 4vh' }}>
            <Text size={19} weight={'semibold'}>
              Create Nimbus Validator
            </Text>
            <Text size={15} weight="regular">
              Earn Rewards for securing the Ethereum Network
            </Text>
          </YStack>
          <FormStepper />
          <Shadow
            variant="$2"
            style={{
              width: '1052px',
              height: '523px',
              borderRadius: '16px',
              border: 'none',
              backgroundColor: '#fff',
            }}
          >
            <YStack>
              <Titles
                title="Overview"
                subtitle="Becoming a validator is a big responsibility with important preparation steps. Only start the deposit process when youre ready."
              ></Titles>
            </YStack>
          </Shadow>
        </YStack>
      </PageWrapperShadow>
    </>
  )
}

export default ValidatorOnboarding
