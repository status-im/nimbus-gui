import { InformationBox, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import { CloseCircleIcon, ChevronRightIcon } from '@status-im/icons'
import { useEffect, useState } from 'react'

type Log = {
  message: string
  variant: 'default' | 'information' | 'error'
}

const LogsList = () => {
  const [logs, setLogs] = useState([] as Log[])

  useEffect(() => {
    setLogs([
      {
        message: 'Critical Logs: 0.01 / M',
        variant: 'default',
      },
      {
        message: 'Warning Logs: 0.01 / M',
        variant: 'default',
      },
      {
        message: 'Error Logs: 0.01 / M',
        variant: 'default',
      },
    ])
  }, [])

  return (
    <YStack space={'$2'}>
      <XStack justifyContent="space-between">
        <Text size={15} weight={'semibold'}>
          Logs
        </Text>
        <ChevronRightIcon size={20} style={{ marginRight: '8px' }} />
      </XStack>
      {logs.map(log => (
        <InformationBox
          key={log.message}
          message={log.message}
          icon={<CloseCircleIcon size={20} />}
          variant={log.variant}
        />
      ))}
    </YStack>
  )
}

export default LogsList
