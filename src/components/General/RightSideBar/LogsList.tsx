import { InformationBox, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import { ChevronRightIcon } from '@status-im/icons'
import { useEffect, useState } from 'react'
import Icon from '../Icon'

type Log = {
  message: string
  variant: 'default' | 'information' | 'error'
  iconPath: string
}

const LogsList = () => {
  const [logs, setLogs] = useState([] as Log[])

  useEffect(() => {
    setLogs([
      {
        message: 'Critical Logs: 0.01 / M',
        variant: 'default',
        iconPath: '/icons/thunder.png',
      },
      {
        message: 'Warning Logs: 0.01 / M',
        variant: 'default',
        iconPath: '/icons/small-warn.png',
      },
      {
        message: 'Error Logs: 0.01 / M',
        variant: 'default',
        iconPath: '/icons/small-error.png',
      },
    ])
  }, [])

  return (
    <YStack space={'$2'}>
      <XStack justifyContent="space-between" style={{ marginBottom: '3px' }}>
        <Text size={15} weight={'semibold'}>
          Logs
        </Text>
        <ChevronRightIcon
          size={20}
          style={{ marginRight: '8px', cursor: 'pointer' }}
        />
      </XStack>
      {logs.map(log => (
        <InformationBox
          key={log.message + log.variant}
          message={log.message}
          icon={<Icon src={log.iconPath} width={14} height={14} />}
          variant={log.variant}
        />
      ))}
    </YStack>
  )
}

export default LogsList
