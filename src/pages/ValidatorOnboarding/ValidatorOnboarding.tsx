import { YStack } from 'tamagui'
import { Shadow, Text } from '@status-im/components'
import FormStepper from './Stepper'
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
            <YStack className="layout-left" space={10} left={40} top={40}>
              <Text size={27} weight={'semibold'} style={{ marginBottom: '30px' }}>
                Overview
              </Text>

              <Text size={27}>
                Becoming a validator is a big responsibility with important preparation steps. Only
                start the deposit process when youre ready."
              </Text>
              <Text size={15} color="#939BA1">
                By running a validator, you'll be responsible for securing the network and receive
                continuous payouts for actions that help the network reach consensus.
              </Text>
              <Text size={15} color="#939BA1">
                Since the successful transition to proof-of-stake via The Merge, Ethereum is fully
                secured by proof-of-stake validators. By running a validator, you'll be helping to
                secure the Ethereum network.
              </Text>
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
