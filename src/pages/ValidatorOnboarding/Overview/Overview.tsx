import { YStack } from 'tamagui'
import { Text } from '@status-im/components'

import OverviewCard from './OverviewCard'
import LinkWithArrow from '../../../components/General/LinkWithArrow'
import OverviewWrapper from './OverviewWrapper'
import { LANDING } from '../../../constants'
import styles from './overview.module.css'

const Overview = () => {
  return (
    <OverviewWrapper
      imgHeight="200%"
      rightImageSrc="./background-images/sync-status-background.png"
    >
      <YStack space={'$3'} className={styles['overview-container']}>
        <Text size={27} weight={'semibold'}>
          Overview
        </Text>
        <Text size={19}>
          Becoming a validator is a big responsibility with important
          preparation steps. Only start the deposit process when you're ready.
        </Text>
        <Text size={15} color="#939BA1">
          By running a validator, you'll be responsible for securing the network
          and receive continuous payouts for actions that help the network reach
          consensus.
        </Text>
        <Text size={15} color="#939BA1">
          Since the successful transition to proof-of-stake via The Merge,
          Ethereum is fully secured by proof-of-stake validators. By running a
          validator, you'll be helping to secure the Ethereum network.
        </Text>
        <LinkWithArrow
          text="Learn More"
          to={LANDING}
          arrowRight={true}
          style={{ marginBottom: '1rem', fontSize: '13px' }}
        />
      </YStack>
      <div className={styles['overview-cards']}>
        <OverviewCard text={'Current APR'} value={'4.40%'} />
        <OverviewCard text={'Total ETH Staked'} value={'9,451,123'} />
        <OverviewCard text={'Estimated Activation Time'} value={'32 Days'} />
        <OverviewCard text={'Validator Queue'} value={'92603'} />
      </div>
    </OverviewWrapper>
  )
}

export default Overview
