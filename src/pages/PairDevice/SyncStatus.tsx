import { XStack, YStack } from 'tamagui'
import { InformationBox, Text } from '@status-im/components'
import Icon from '../../components/General/Icon'
import RefreshBlackIcon from '/icons/refresh-black.svg'
import RefreshIcon from '/icons/refresh.svg'
import BlockIcon from '/icons/block.svg'
type SyncStatusProps = {
  isPairing: boolean
  timer: string
  isAwaitingPairing?: boolean
}
const SyncStatus = ({ isPairing, timer, isAwaitingPairing }: SyncStatusProps) => {
  return (
    <YStack style={{ width: '584px' }}>
      <XStack space={'$4'} style={{ justifyContent: 'space-between' }}>
        <Text size={11} color="#647084" weight="medium">
          Device Sync Status
        </Text>
        {isPairing && (
          <Text
            size={isAwaitingPairing ? 15 : 11}
            color={isAwaitingPairing ? '#EB5757' : '#647084'}
            weight={isAwaitingPairing && 'semibold'}
          >
            {timer}
          </Text>
        )}
        <Icon src={isPairing ? RefreshBlackIcon : RefreshIcon} height={20} />
      </XStack>
      {isPairing ? (
        isAwaitingPairing ? (
          <Text size={15} color="#EB5757" weight={'semibold'}>
            Awaiting Pairing{' '}
          </Text>
        ) : (
          <Text size={15} color="#09101C" weight={'semibold'}>
            Awaiting pairing connection...
          </Text>
        )
      ) : (
        <Text size={13} color="#A1ABBD">
          No pairing input provided.
        </Text>
      )}
      {isAwaitingPairing && (
        <InformationBox
          message="No connection has been created to a Nimbus service for over 3 minutes. Please ensure that the generated pairing ID was input into the CLI. If you are unable to pair device, consider connect via IP.   "
          variant="error"
          icon={<Icon src={BlockIcon} />}
        />
      )}
    </YStack>
  )
}

export default SyncStatus
