import { InformationBox, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import { CloseCircleIcon, ChevronRightIcon } from '@status-im/icons'
import { useEffect, useState } from 'react'

type Alert = {
  message: string
  variant: 'default' | 'information' | 'error'
}

const AlertsList = () => {
  const [_, setAlerts] = useState([] as Alert[])

  useEffect(() => {
    setAlerts([
      {
        message: 'Network: Participation rate below 66%',
        variant: 'default',
      },
      {
        message: 'Node: 32 Peers Connected',
        variant: 'information',
      },
      {
        message: 'Node / Validator: Process Down',
        variant: 'error',
      },
    ])
  }, [])

  return (
    <YStack space={'$2'}>
      <XStack justifyContent="space-between">
        <Text size={15} weight={'semibold'}>
          Alerts
        </Text>
        <div style={{ marginRight: '8px' }}>
          <ChevronRightIcon size={20} />
        </div>
      </XStack>
      <InformationBox
        message="Network: Participation rate below 66%"
        icon={<CloseCircleIcon size={20} />}
        variant="default"
        onClosePress={() => alert('dismissed')}
      />
      <InformationBox
        message="Node: 32 Peers Connected"
        icon={<CloseCircleIcon size={20} />}
        variant="information"
        onClosePress={() => alert('dismissed')}
      />
      <InformationBox
        message="Node / Validator: Process Down"
        icon={<CloseCircleIcon size={20} />}
        variant="error"
        onClosePress={() => alert('dismissed')}
      />
    </YStack>
  )
}

export default AlertsList
