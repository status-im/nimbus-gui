import { Separator, YStack } from 'tamagui'

import SetupRow from './SetupRow'
import WithdrawalAddress from './WithdrawalAddress'
import LinkWithArrow from '../../../components/General/LinkWithArrow'

const ClientSetup = () => {
  return (
    <YStack padding={'26px'} width={'100%'} space={'$8'}>
      <SetupRow title={'Setup up Validators'} />
      <Separator borderColor={'#F0F2F5'} />
      <WithdrawalAddress title={'Withdrawal address'} />
      <LinkWithArrow
        text="Advanced Recovery Method"
        to={'/'}
        arrowRight={true}
        style={{ marginBottom: '50px' }}
      />
    </YStack>
  )
}
export default ClientSetup
