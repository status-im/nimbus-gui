import { Text } from '@status-im/components'

import { FixedSizeList, FixedSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import './scroller.css'
import { Stack, XStack } from 'tamagui'
import { exampleData } from './exampleData'
import { useEffect, useRef, useState } from 'react'

type DataType = {
  option: string
  description: string
}

interface RowProps {
  data: DataType | undefined
  index: number
}

const Row = ({ data, index }: RowProps) => {
  if (!data) {
    return <Text size={19}>Loading...</Text>
  }

  const { option, description } = data
  return (
    <XStack style={{ fontFamily: 'monospace' }}>
      <Stack
        style={{
          alignContent: 'flex-start',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 12px',
          marginRight: '20px',
          width: '30px',
          backgroundColor: '#f5f6f8',
          color: '#A1ABBD',
        }}
      >
        {index}
      </Stack>
      <Stack>{new Date(Date.now()).toLocaleDateString()}</Stack>
      <Stack
        style={{
          alignContent: 'flex-start',
          marginRight: '20px',
          marginLeft: '20px',
          minWidth: '110px',
        }}
      >
        {option}
      </Stack>
      <Stack>{description}</Stack>
    </XStack>
  )
}
const LogsTerminal = () => {
  const [data, setData] = useState<DataType[]>([])
  const [isScrolling, setIsScrolling] = useState(false)
  const [loadedIndexes, setLoadedIndexes] = useState<{ [key: number]: boolean }>({})
  const listRef = useRef<FixedSizeList | null>(null)
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
     // addNewLog()
    }, 2000)

    return () => clearInterval(interval)
  }, [isScrolling])

  useEffect(() => {
    if (listRef.current && shouldAutoScroll) {
      setTimeout(() => {
        if (listRef.current) listRef.current.scrollToItem(data.length - 1, 'end')
      }, 500)
    }
  }, [data, shouldAutoScroll])

  const loadMoreItems = async (startIndex: number, stopIndex: number) => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        const newData = exampleData.slice(startIndex, stopIndex + 1)
        setData((prevData: DataType[]) => [...prevData, ...newData])

        for (let i = startIndex; i <= stopIndex; i++) {
          setLoadedIndexes((prev: { [key: number]: boolean }) => ({ ...prev, [i]: true }))
        }
        resolve()
      }, 5000)
    })
  }

  const isItemLoaded = (index: number) => !!loadedIndexes[index]

  const addNewLog = () => {
    if (!isScrolling) {
      const newLog: DataType = {
        option: `--new-option-${data.length + 1}`,
        description: `New log entry ${data.length + 1} ${Math.random()}`,
      }

      const newIndex = data.length
      setData(prevData => [...prevData, newLog])
      setLoadedIndexes(prev => ({ ...prev, [newIndex]: true }))
    }
  }

  const handleScroll = ({ scrollTop, scrollHeight, clientHeight }: any) => {
    if (scrollTop < scrollHeight - clientHeight) {
      setIsScrolling(true)
      setShouldAutoScroll(false)
    } else {
      setIsScrolling(false)

      if (!shouldAutoScroll && scrollTop === scrollHeight - clientHeight) {
        setShouldAutoScroll(true)
      }
    }
  }

  return (
    <Stack>
      <InfiniteLoader
        itemCount={data.length}
        isItemLoaded={isItemLoaded}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <List
            ref={(list: FixedSizeList | null) => {
              listRef.current = list
              ref(list)
            }}
            className="custom-scroll"
            height={650}
            width={1100}
            itemCount={data.length}
            itemSize={20}
            itemData={data}
            onItemsRendered={onItemsRendered}
            onScroll={handleScroll}
            style={{
              borderRadius: '25px',
              border: '1px solid #E7EAEE',
            }}
          >
            {({ index, style }) => (
              <Stack style={style}>
                <Row data={data[index]} index={index} />
              </Stack>
            )}
          </List>
        )}
      </InfiniteLoader>
    </Stack>
  )
}

export default LogsTerminal
