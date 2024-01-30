import { Button } from '@status-im/components'

import { VariableSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import './scroller.css'
import { Stack } from 'tamagui'
import { useEffect, useRef, useState } from 'react'
import TerminalRow from './TerminalRow'

type DataType = {
  option: string
  description: string
}

type LogsTerminalProps = {
  windowWidth: number
  dropdownMenuItem: string
  timestamps: boolean
  searchInput: string
  setSearchInput: (searchInput: string) => void
  highLightSearched: boolean
}

const fetchMoreData = (): Promise<DataType[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const newData: DataType[] = []
      for (let i = 0; i < 10; i++) {
        newData.push({ option: `Option ${i}`, description: `Description ${i}` })
      }
      resolve(newData)
    }, 500)
  })
}

const LogsTerminal = ({
  windowWidth,
  timestamps,
  searchInput,
}: LogsTerminalProps) => {
  const [data, setData] = useState<DataType[]>([])
  const [loadedIndexes, setLoadedIndexes] = useState<{
    [key: number]: boolean
  }>({})
  const listRef = useRef<List | null>(null)

  const [shouldAutoScroll, setShouldAutoScroll] = useState(true)

  useEffect(() => {
    if (shouldAutoScroll) {
      setTimeout(() => {
        listRef.current?.scrollToItem(data.length - 1, 'end')
      }, 500)
    }
  }, [data.length, shouldAutoScroll])

  const loadMoreItems = () => {
    fetchMoreData().then(newItems => {
      setData(prevData => [...prevData, ...newItems])
    })
  }
  const isItemLoaded = (index: number) => !!loadedIndexes[index]

  const addNewLog = () => {
    const newLog: DataType = {
      option: `--new-option-${data.length + 1}`,
      description: `New log entry ${data.length + 1} ${Math.random()}`,
    }

    const newIndex = data.length
    setData(prevData => [...prevData, newLog])
    setLoadedIndexes(prev => ({ ...prev, [newIndex]: true }))
    if (shouldAutoScroll) {
      listRef.current?.scrollToItem(data.length, 'end')
    }
  }

  const handleScroll = ({ scrollTop, scrollHeight, clientHeight }: any) => {
    const isAtBottom = scrollTop + clientHeight >= scrollHeight

    if (isAtBottom) {
      setShouldAutoScroll(true)
    } else {
      setShouldAutoScroll(false)
    }
  }
  function itemSize(index: number) {
    const oneLineCountChars = 165
    const descriptionLength = data[index].description.length
    const value1 = 76
    const value2 = 120
    const value3 = 250

    if (descriptionLength <= oneLineCountChars) {
      return value1
    } else if (descriptionLength <= oneLineCountChars * 2) {
      return value2
    } else {
      return value3
    }
  }
  return (
    <Stack
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
      }}
    >
      <InfiniteLoader
        itemCount={data.length + 1}
        isItemLoaded={isItemLoaded}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <List
            ref={(list: List | null) => {
              ref(list)
              listRef.current = list
            }}
            className="custom-scroll"
            height={650}
            width={windowWidth - 500}
            itemCount={data.length}
            itemData={data}
            itemSize={itemSize}
            onItemsRendered={onItemsRendered}
            onScroll={handleScroll}
            style={{
              borderRadius: '25px',
              border: '1px solid #E7EAEE',
            }}
          >
            {({ index, style }) => {
              const highlight =
                searchInput &&
                data[index].description.split(' ').includes(searchInput)
                  ? true
                  : false
              // now we only check for the existing text at the moment
              // I have to move this statemant in the terminalRow component
              return (
                <Stack style={style}>
                  <TerminalRow
                    data={data[index]}
                    index={index}
                    timestamps={timestamps}
                    highlight={highlight}
                  />
                </Stack>
              )
            }}
          </List>
        )}
      </InfiniteLoader>
      <Button fullWidth onPress={() => addNewLog()}>
        Press to add log
      </Button>
    </Stack>
  )
}

export default LogsTerminal
