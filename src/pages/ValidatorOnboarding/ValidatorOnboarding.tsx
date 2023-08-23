import { YStack } from 'tamagui'
import { Shadow, Text } from '@status-im/components'
import FormStepper from './Stepper'
import Titles from '../../components/General/Titles'
import PageWrapperGradient from '../../components/PageWrappers/PageWrapperGradient'

function ValidatorOnboarding() {
  return (
    <>
      <PageWrapperGradient>
        <YStack>
          <YStack style={{ width: '100%' }}>
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
      </PageWrapperGradient>
    </>
  )
}

export default ValidatorOnboarding
