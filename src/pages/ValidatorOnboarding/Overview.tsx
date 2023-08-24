import { Stack, Text as TextTam, XStack, YStack } from 'tamagui'
import { Button, Shadow, Text } from '@status-im/components'
import { Link } from 'react-router-dom'

const Overview = () => {
  return (
    <>
      <Shadow
        variant="$2"
        style={{
          borderRadius: '16px',
          border: 'none',
          flexDirection: 'row',
          backgroundColor: '#fff',
        }}
      >
        <YStack className="layout-left" space={10} style={{ padding: '16px 32px' }}>
          <TextTam fontSize={27} fontWeight={'700'} style={{ marginBottom: '20px' }}>
            Overview
          </TextTam>

          <Text size={27}>
            Becoming a validator is a big responsibility with important preparation steps. Only
            start the deposit process when youre ready.
          </Text>
          <Text size={19} color="#939BA1" type={''}>
            By running a validator, you'll be responsible for securing the network and receive
            continuous payouts for actions that help the network reach consensus.
          </Text>
          <Text size={19} color="#939BA1">
            Since the successful transition to proof-of-stake via The Merge, Ethereum is fully
            secured by proof-of-stake validators. By running a validator, you'll be helping to
            secure the Ethereum network.
          </Text>
          <Text size={13}>
            <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}> Learn more</Link>
          </Text>
          <XStack
            style={{
              justifyContent: 'space-between',
              width: '180%',
              height: '100px',
              marginTop: '200px',
            }}
          >
            <YStack
              style={{
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.15)',
                width: '305px',
                padding: '8px 16px',
                backgroundColor: '#FFF',
              }}
            >
              <Text size={19} weight={'semibold'}>
                Current APR
              </Text>
              <Text size={27} color="blue" weight={'semibold'}>
                4.40%
              </Text>
            </YStack>
            <YStack
              style={{
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.15)',
                backgroundColor: '#FFF',
                width: '305px',
                padding: '8px 16px',
              }}
            >
              <Text size={19} weight={'semibold'}>
                Total ETH Staked
              </Text>
              <Text size={27} color="blue" weight={'semibold'}>
                19,451,123
              </Text>
            </YStack>
            <YStack
              style={{
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.15)',
                width: '305px',
                backgroundColor: '#FFF',
                padding: '8px 16px',
              }}
            >
              <Text size={19} weight={'semibold'}>
                Estimated Activation Time
              </Text>
              <Text size={27} color="blue" weight={'semibold'}>
                32 Days
              </Text>
            </YStack>
            <YStack
              style={{
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.15)',
                width: '305px',
                backgroundColor: '#FFF',
                padding: '8px 16px',
              }}
            >
              <Text size={19} weight={'semibold'}>
                Validator Queue
              </Text>
              <Text size={27} color="blue" weight={'semibold'}>
                92603
              </Text>
            </YStack>
          </XStack>
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
    </>
  )
}

export default Overview
