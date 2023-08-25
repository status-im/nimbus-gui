import { Stack, Text as TextTam, XStack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { Link } from 'react-router-dom'
import OverviewCard from './OverviewCard'
import { ArrowRightIcon } from '@status-im/icons'

const Overview = () => {
  return (
    <>
      <YStack className="layout-left" space={'$5'}>
        <TextTam fontSize={27} fontWeight={'600'} style={{ marginBottom: '5px' }}>
          Overview
        </TextTam>
        <Text size={27}>
          Becoming a validator is a big responsibility with important preparation steps. Only start
          the deposit process when youre ready.
        </Text>
        <Text size={15} color="#939BA1">
          By running a validator, you'll be responsible for securing the network and receive
          continuous payouts for actions that help the network reach consensus.
        </Text>
        <Text size={15} color="#939BA1">
          Since the successful transition to proof-of-stake via The Merge, Ethereum is fully secured
          by proof-of-stake validators. By running a validator, you'll be helping to secure the
          Ethereum network.
        </Text>
        <Stack style={{ margin: '2% 0 4%', maxWidth: 'fit-content' }}>
          <Text size={15}>
            <XStack space={'$1'} style={{ alignItems: 'center' }}>
              <Link style={{ color: '#2A4CF4' }} to={'/'}>
                Learn more
              </Link>
              <ArrowRightIcon size={16} color="#2A4CF4" />
            </XStack>
          </Text>
        </Stack>
        <XStack space={'$5'}>
          <OverviewCard text={'Current APR'} value={'4.40%'} />
          <OverviewCard text={'Total ETH Staked'} value={'9,451,123'} />
          <OverviewCard text={'Estimated Activation Time'} value={'32 Days'} />
          <OverviewCard text={'Validator Queue'} value={'92603'} />
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
    </>
  )
}

export default Overview
