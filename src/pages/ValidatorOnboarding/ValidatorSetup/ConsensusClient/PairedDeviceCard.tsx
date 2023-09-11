import { useEffect, useState } from 'react'
import { XStack, YStack } from 'tamagui'
import { ClearIcon } from '@status-im/icons'
import { Avatar, Text } from '@status-im/components'

type PairedDeviceCardProps = {
  isVisibleState: boolean
}

const PairedDeviceCard = ({ isVisibleState }: PairedDeviceCardProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    setIsVisible(isVisibleState)
  }, [isVisibleState])

  if (!isVisible) return null

  return (
    <XStack
      space={'$7'}
      style={{
        padding: '2px 6px',
        border: '1px solid #DCE0E5',
        borderRadius: '15px',
      }}
      alignItems={'center'}
    >
      <XStack space={'$3'} alignItems={'center'}>
        <Avatar backgroundColor="pink" size={32} type="user" name="RP" />
        <YStack>
          <Text size={13} color="#647084">
            Paired Device
          </Text>
          <Text size={15} weight={'semibold'}>
            Stake & Chips
          </Text>
        </YStack>
      </XStack>
      <ClearIcon size={20} color="#A1ABBD" cursor={'pointer'} onClick={() => setIsVisible(false)} />
    </XStack>
  )
}

export default PairedDeviceCard
