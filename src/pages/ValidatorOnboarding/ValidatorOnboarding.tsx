import { YStack } from 'tamagui'
import { Shadow, Text } from '@status-im/components'
import FormStepper from './Stepper'
import Titles from '../../components/General/Titles'
import PageWrapperGradient from '../../components/PageWrappers/PageWrapperGradient'

function ValidatorOnboarding() {
  return (
    <>
      <PageWrapperGradient>
        <YStack style={{ maxWidth: '1052px', width: '100%', margin: '0 auto' }}>
          <YStack style={{ width: '100%', margin: '64px 0 1vh' }}>
            <Text size={19} weight={'semibold'}>
              Create Nimbus Validator
            </Text>
            <Text size={15} weight="regular">
              Earn Rewards for securing the Ethereum Network
            </Text>
            <FormStepper />
          </YStack>

          <Shadow
            variant="$2"
            style={{
              width: '100%',
              minHeight: '523px',
              borderRadius: '16px',
              border: 'none',
              flexDirection: 'row',
              backgroundColor: '#fff',
            }}
            className="content"
          >
            <YStack className="layout-left">
              <Titles
                title="Overview"
                subtitle="Becoming a validator is a big responsibility with important preparation steps. Only start the deposit process when youre ready."
              ></Titles>
            </YStack>
            <section className="layout-right">
              <div className="image-container">
                <img
                  src="./background-images/sync-status-background.png"
                  alt="background"
                  className="background-img"
                />
              </div>
            </section>
          </Shadow>
        </YStack>
      </PageWrapperGradient>
    </>
  )
}

export default ValidatorOnboarding
