import { Separator, Stack, XStack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { ArrowRightIcon } from '@status-im/icons'
import { Link } from 'react-router-dom'

import SetupRow from './SetupRow'
import WithdrawalAddress from './WithdrawalAddress'

const ClientSetup = () => {
  return (
    <YStack padding={'26px'} width={'100%'} space={'$8'}>
      <SetupRow title={'Setup up Validators'} />
      <Separator borderColor={'#F0F2F5'} />
      <WithdrawalAddress title={'Withdrawal address'} />
      <Stack style={{ maxWidth: 'fit-content', marginTop: '50px' }}>
        <Text size={15}>
          <XStack space={'$1'} style={{ alignItems: 'center' }}>
            <Link style={{ color: '#2A4CF4' }} to={'/'}>
              Advanced Recovery Method
            </Link>
            <ArrowRightIcon size={16} color="#2A4CF4" />
          </XStack>
        </Text>
      </Stack>
    </YStack>
  )
}
export default ClientSetup
