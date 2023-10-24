import { YStack } from 'tamagui'
import { Link } from 'react-router-dom'
import { Text } from '@status-im/components'

import SyntaxHighlighterBox from './SyntaxHighlighter'
import { DocumentationItem } from './documentations'

type CurrentPlatformOSDocsProps = {
  content: DocumentationItem[]
}

const CurrentPlatformOSDocs = ({ content }: CurrentPlatformOSDocsProps) => {
  return (
    <YStack space={'$2'}>
      {content.map((item, index) => {
        switch (item.type) {
          case 'code':
            return <SyntaxHighlighterBox key={index} rows={item.content} />
          case 'link':
            return (
              <Link key={index} to={item.to} target="_blank">
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
