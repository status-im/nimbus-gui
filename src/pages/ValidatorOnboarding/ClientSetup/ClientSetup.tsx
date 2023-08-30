import { Separator, Stack, XStack, YStack } from 'tamagui'
import SetupRow from './SetupRow'
import WithdrawalAddress from './WithdrawalAddress'
import { Text } from '@status-im/components'
import { ArrowLeftIcon  } from '@status-im/icons'
import { Link } from 'react-router-dom'

const ClientSetup = () => {
  return (
    <YStack padding={'26px'} width={'100%'} space={'$8'}>
      <SetupRow title={'Setup up Validators'} />
      <Separator borderColor={'#F0F2F5'} />
      <WithdrawalAddress title={'Withdrawal address'} />
      <Stack style={{ maxWidth: 'fit-content', marginTop: '50px' }}>
        <Text size={15}>
          <XStack space={'$1'} style={{ alignItems: 'center' }}>
            <ArrowLeftIcon size={16} color="#2A4CF4" />
            <Link style={{ color: '#2A4CF4' }} to={'/'}>
              Edit Validators
            </Link>
          </XStack>
        </Text>
      </Stack>
    </YStack>
  )
}
export default ClientSetup
