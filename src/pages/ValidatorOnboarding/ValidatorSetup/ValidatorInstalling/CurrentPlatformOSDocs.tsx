import { useSelector } from 'react-redux'
import { DOCUMENTATIONS } from './documentations'
import { YStack } from 'tamagui'
import { Link } from 'react-router-dom'
import { Text } from '@status-im/components'

import { RootState } from '../../../../redux/store'
import SyntaxHighlighterBox from './SyntaxHighlighter'

type CurrentPlatformOSDocsProps = {
  selectedOS: string
}

const CurrentPlatformOSDocs = ({ selectedOS }: CurrentPlatformOSDocsProps) => {
  const selectedClient = useSelector((state: RootState) => state.execClient.selectedClient)

  return (
    <YStack space={'$2'}>
      {DOCUMENTATIONS[selectedClient].documentation[selectedOS].map((item, index) => {
        switch (item.type) {
          case 'code':
            return <SyntaxHighlighterBox key={index} rows={item.content} />
          case 'link':
            return (
              <Link key={index} to={item.to}>
                {item.content}
              </Link>
            )
          case 'text':
            return (
              <Text size={15} key={index}>
                {item.content}
              </Text>
            )
          default:
            return null
        }
      })}
    </YStack>
  )
}

export default CurrentPlatformOSDocs
