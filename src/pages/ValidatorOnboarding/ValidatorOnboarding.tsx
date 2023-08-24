import { Stack, Text as TextTam, YStack } from 'tamagui'
import { Button, Shadow, Text } from '@status-im/components'
import FormStepper from './FormStepper'
import PageWrapperGradient from '../../components/PageWrappers/PageWrapperGradient'
import Titles from '../../components/General/Titles'

const ValidatorOnboarding = () => {
  return (
    <PageWrapperGradient>
      <YStack
        style={{
          width: '100%',
          margin: '0 auto',
          padding: '2% 10%',
          justifyContent: 'start',
          alignItems: 'start',
        }}
      >
        <Titles
          title="Create Nimbus Validator"
          subtitle="Earn Rewards for securing the Ethereum Network"
        />
        <FormStepper />
        <Shadow
          variant="$2"
          style={{
            borderRadius: '16px',
            border: 'none',
            flexDirection: 'row',
            backgroundColor: '#fff',
          }}
          className="content"
        >
          <YStack className="layout-left" space={10} style={{ padding: '16px 32px' }}>
            <TextTam fontSize={27} fontWeight={'700'} style={{ marginBottom: '20px' }}>
              Overview
            </TextTam>

            <Text size={27}>
              Becoming a validator is a big responsibility with important preparation steps. Only
              start the deposit process when youre ready.
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
        <Stack style={{ alignItems: 'end', width: '100%', marginTop: '16px' }}>
          <Button>Continue</Button>
        </Stack>
      </YStack>
    </PageWrapperGradient>
  )
}

export default ValidatorOnboarding
