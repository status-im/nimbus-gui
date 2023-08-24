import { Button, Shadow, Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'
import IconText from '../../../components/General/IconText'
import { Link } from 'react-router-dom'

const Advicsories = () => {
  return (
    <>
      <Shadow
        variant="$1"
        style={{
          borderRadius: '16px',
          border: 'none',
          backgroundColor: '#fff',
          padding: '16px 32px',
        }}
      >
        <XStack
          justifyContent={'space-between'}
          className="layout-left"
          space={10}
          style={{ padding: '16px 32px' }}
        >
          <YStack>
            <Text size={27}>Advisories</Text>
            <Text size={15}>① Proof of Stake</Text>
            <Text size={15}>② Deposit</Text>
            <Text size={15}>③ Key Management</Text>
            <Text size={15} color="blue">
              ④ Bad Behaviour
            </Text>
            <Text size={15}>⑤ Requirements</Text>
            <Text size={15}>⑤ Risks</Text>
          </YStack>
          <YStack>
            <Text size={27}>Bad Behaviour</Text>
            <Text size={13}>
              If you try to cheat the system, or act contrary to the specification, you will be
              liable to incur a penalty known as slashing*. Running your validator keys
              simultaneously on two or more machines will result in slashing.* Simply being offline
              with an otherwise healthy network does not result in slashing, but will result in
              small inactivity penalties.
            </Text>
            <Text size={13} style={{ textDecorationLine: 'underline' }} color="#484848">
              <Link to={'https://github.com/ethereum/consensus-specs'}>
                The Ethereum consensus layer specification
              </Link>
            </Text>
            <Text size={13} weight={'semibold'}>
              <Link
                to={'https://github.com/ethereum/consensus-specs'}
                style={{ textDecorationLine: 'underline', color: '#2A4CF4', fontWeight: 'bold' }}
              >
                More on slashing risks
              </Link>
            </Text>
          </YStack>
        </XStack>
      </Shadow>
      <Stack style={{ alignItems: 'end', width: '100%', marginTop: '16px' }}>
        <Button>Continue</Button>
      </Stack>
    </>
  )
}

export default Advicsories
