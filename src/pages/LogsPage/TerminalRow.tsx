import { Text } from '@status-im/components'
import { Stack, XStack } from 'tamagui'
import { LogType } from '../../constants'

const colorMap = {
  NTC: '#9b64b0',
  DBG: '#7d828a',
  INF: '#5ca8b4',
  WRN: '#c9ad72',
  ERR: '#bc5b5c',
  FAT: '#b0686f',
}

const formatLog = (log: LogType, timestamps: boolean) => {
  const { lvl, ts, msg, ...rest } = log

  const logStyle = { color: colorMap[lvl] }
  const tsStyle = { color: '#848994' }
  const msgStyle = { color: '#a0a6b2', fontWeight: 'bold' }
  const genericStyle = { color: '#5777c5' }

  return (
    <XStack space="$4">
      <span style={{ ...logStyle }}>{lvl}</span>
      {timestamps && <span style={{ ...tsStyle }}>{ts}</span>}
      <span style={{ ...msgStyle }}>{msg}</span>
      {Object.entries(rest).map(([key, value]) => {
        if (value !== undefined && value !== null) {
          return (
            <div key={key}>
              <span style={logStyle}>{key}=</span>
              <span style={{ ...genericStyle }}>{`${JSON.stringify(
                value,
              )}`}</span>
            </div>
          )
        }
        return null
      })}
    </XStack>
  )
}

interface RowProps {
  log: LogType
  index: number
  searchInput: string
  timestamps?: boolean
  indexesVisible?: boolean
}

const TerminalRow = ({
  log,
  index,
  searchInput,
  timestamps,
  indexesVisible,
}: RowProps) => {
  if (!log) {
    return <Text size={19}>Loading...</Text>
  }
  const rowText = Object.values(log)
  const logElements = formatLog(log, timestamps || false)

  const rowHighlightStyle = {
    backgroundColor: searchInput
      ? rowText.some(
          value =>
            typeof value === 'string' &&
            value.toLowerCase().includes(searchInput.toLowerCase()),
        )
        ? '#fff2'
        : 'transparent'
      : 'transparent',
  }

  return (
    <XStack style={{ fontFamily: 'monospace' }}>
      {indexesVisible && (
        <Stack
          style={{
            width: '30px',
            display: 'inline-block',
            color: '#F5F6F8',
            backgroundColor: '#fff2',
            textAlign: 'center',
            borderRadius: '25px',
            marginRight: '1rem',
            userSelect: 'none',
          }}
        >
          {index}
        </Stack>
      )}

      <XStack
        style={{
          ...rowHighlightStyle,
          alignContent: 'flex-start',
          marginLeft: !indexesVisible ? '15px' : '0',
        }}
      >
        {logElements}
      </XStack>
    </XStack>
  )
}

export default TerminalRow
